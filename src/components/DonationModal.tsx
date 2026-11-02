import React, { useState, useEffect } from 'react';
import { X, Heart, ShieldCheck, Check, Sparkles, Package, ExternalLink, CreditCard } from 'lucide-react';
import { DONATION_TIERS, IN_KIND_CATEGORIES } from '../data/mockData';
import { apiService } from '../services/apiService';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'stripe' | 'in-kind'>('stripe');
  
  // Monetary state
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [program, setProgram] = useState<string>('Where Most Needed');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [monetarySuccess, setMonetarySuccess] = useState<boolean>(false);

  // In-Kind state
  const [selectedInKind, setSelectedInKind] = useState<string[]>([IN_KIND_CATEGORIES[0].id]);
  const [inKindDesc, setInKindDesc] = useState<string>('');
  const [inKindName, setInKindName] = useState<string>('');
  const [inKindEmail, setInKindEmail] = useState<string>('');
  const [inKindPhone, setInKindPhone] = useState<string>('');
  const [inKindSuccess, setInKindSuccess] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const handleStripeCheckout = () => {
    const stripeUrl = apiService.getStripeUrl();
    apiService.recordDonation({
      amount: currentAmount,
      frequency,
      program,
      donorName: donorName || undefined,
      donorEmail: donorEmail || undefined,
      type: 'stripe'
    });

    if (stripeUrl && !stripeUrl.includes('test_pathways')) {
      window.open(stripeUrl, '_blank', 'noopener,noreferrer');
      onClose();
    } else {
      setMonetarySuccess(true);
    }
  };

  const handleInKindSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    apiService.recordDonation({
      amount: 0,
      frequency: 'one-time',
      program: 'In-Kind Item Donation',
      donorName: inKindName,
      donorEmail: inKindEmail,
      type: 'in-kind',
      inKindCategories: selectedInKind,
      inKindDescription: inKindDesc
    });
    setInKindSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-[#E11D48] text-white flex items-center justify-center shrink-0 shadow-sm shadow-rose-500/20">
            <Heart className="w-6 h-6 fill-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Make an Impact</h3>
            <p className="text-xs text-slate-500">100% Tax-Deductible · Pathways Assistance Center 501(c)(3)</p>
          </div>
        </div>

        {/* Tab Switch: Monetary (Stripe) vs In-Kind Items */}
        <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('stripe')}
            className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'stripe'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CreditCard className="w-4 h-4 text-rose-600" />
            <span>Monetary Gift (Stripe)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('in-kind')}
            className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'in-kind'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Package className="w-4 h-4 text-slate-700" />
            <span>Pledge Physical Goods</span>
          </button>
        </div>

        {/* TAB 1: MONETARY GIVING */}
        {activeTab === 'stripe' && (
          <div>
            {monetarySuccess ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950 mb-1">
                  Thank You for Your Generosity!
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed mb-4">
                  Your pledge of <strong>${currentAmount} ({frequency})</strong> for <em>{program}</em> has been registered. You will receive an official tax deduction acknowledgment from Pathways Assistance Center.
                </p>
                <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-slate-600 mb-5 text-left">
                  <p><strong>Note for Live Site:</strong> Once you connect your live Stripe Payment Link (via the gear icon in the donation section), donors will be redirected directly to your customized Stripe checkout page!</p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl font-bold text-sm bg-emerald-800 text-white hover:bg-emerald-900 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Frequency */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      frequency === 'monthly'
                        ? 'border-[#E11D48] bg-rose-50 text-rose-700 font-extrabold'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Monthly (Most Impact)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      frequency === 'one-time'
                        ? 'border-[#E11D48] bg-rose-50 text-rose-700 font-extrabold'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    One-Time Gift
                  </button>
                </div>

                {/* Amount Tiers */}
                <div className="grid grid-cols-4 gap-2">
                  {DONATION_TIERS.map((tier) => (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => {
                        setAmount(tier.amount);
                        setCustomAmount('');
                      }}
                      className={`py-2.5 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer ${
                        amount === tier.amount && !customAmount
                          ? 'border-[#E11D48] bg-rose-50 text-rose-700 ring-2 ring-rose-500/20'
                          : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    min="5"
                    placeholder="Other custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount(0);
                    }}
                    className="w-full pl-8 pr-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium"
                  />
                </div>

                {/* Program Designation */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Direct Contribution To
                  </label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                  >
                    <option value="Where Most Needed">Where Most Needed (Maximum Flexibility)</option>
                    <option value="Emergency Financial Housing & Utilities">Emergency Housing & Utility Micro-Grants</option>
                    <option value="Food Assistance Bridge">Emergency Food Assistance Bridge</option>
                    <option value="Youth Empowerment Programs">Youth Educational Enrichment & Leadership</option>
                  </select>
                </div>

                {/* Donor Optional Name/Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name (for receipt)</label>
                    <input
                      type="text"
                      placeholder="Jane Neighbor"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  type="button"
                  onClick={handleStripeCheckout}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#E11D48] hover:bg-[#BE123C] active:scale-[0.98] transition-all shadow-md shadow-rose-500/20 cursor-pointer text-sm sm:text-base"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Proceed to Stripe (${currentAmount || 25}{frequency === 'monthly' ? '/mo' : ''})</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Pathways Assistance Center is an IRS 501(c)(3) tax-exempt public charity. Contributions are fully deductible as permitted by law.
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: IN-KIND PHYSICAL GOODS PLEDGE */}
        {activeTab === 'in-kind' && (
          <div>
            {inKindSuccess ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950 mb-1">
                  In-Kind Pledge Confirmed
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed mb-4">
                  Thank you for supporting children and families with physical goods. Our donation coordinator will email you at <strong>{inKindEmail}</strong> to coordinate safe delivery.
                </p>
                <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-slate-600 mb-5 text-left">
                  <p><strong>Direct Inquiries:</strong> You can also email our team at <code>donate@pathwaysac.org</code> or call (972) 581-9322.</p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl font-bold text-sm bg-emerald-800 text-white hover:bg-emerald-900 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleInKindSubmit} className="space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  We accept targeted physical donations to support children and families. Please select the items you are pledging:
                </p>

                <div className="space-y-2">
                  {IN_KIND_CATEGORIES.map((item) => {
                    const isChecked = selectedInKind.includes(item.id);
                    return (
                      <label
                        key={item.id}
                        onClick={() => {
                          if (isChecked) {
                            setSelectedInKind(selectedInKind.filter(i => i !== item.id));
                          } else {
                            setSelectedInKind([...selectedInKind, item.id]);
                          }
                        }}
                        className={`flex items-center gap-3 p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          isChecked ? 'border-rose-400 bg-rose-50/60 text-slate-900' : 'border-slate-200 bg-[#F9FAFB] text-slate-600'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-[#E11D48] border-[#E11D48] text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{item.label}</span>
                      </label>
                    );
                  })}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Item Description & Estimated Quantity
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={inKindDesc}
                    onChange={(e) => setInKindDesc(e.target.value)}
                    placeholder="e.g. 3 pairs of new youth sneakers (sizes 6-8) and unopened shampoo/toothpaste."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={inKindName}
                      onChange={(e) => setInKindName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={inKindEmail}
                      onChange={(e) => setInKindEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={inKindPhone}
                      onChange={(e) => setInKindPhone(e.target.value)}
                      placeholder="(972) 000-0000"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  Submit In-Kind Pledge
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
