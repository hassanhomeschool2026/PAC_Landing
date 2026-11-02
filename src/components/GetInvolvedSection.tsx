import React, { useState } from 'react';
import { DONATION_TIERS, SERVICE_CITIES, IN_KIND_CATEGORIES } from '../data/mockData';
import { apiService } from '../services/apiService';
import { 
  Heart, 
  Users, 
  ShieldCheck, 
  Check, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Gift, 
  CreditCard,
  Settings,
  Sparkles,
  Package
} from 'lucide-react';

interface GetInvolvedSectionProps {
  onOpenDonateModal: () => void;
}

export const GetInvolvedSection: React.FC<GetInvolvedSectionProps> = ({ onOpenDonateModal }) => {
  // Donation State
  const [selectedTier, setSelectedTier] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [programAllocation, setProgramAllocation] = useState<string>('Where Most Needed');
  const [showStripeConfig, setShowStripeConfig] = useState<boolean>(false);
  const [stripeUrlInput, setStripeUrlInput] = useState<string>(apiService.getStripeUrl());
  const [stripeConfigSaved, setStripeConfigSaved] = useState<boolean>(false);

  // Volunteer State
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interests: ['Youth Mentoring (Ages 8–17)'],
    availability: 'Tuesday & Wednesday Mornings (9am - 1pm)',
    message: ''
  });

  const [volSubmitting, setVolSubmitting] = useState(false);
  const [volSubmitted, setVolSubmitted] = useState(false);
  const [volError, setVolError] = useState<string | null>(null);

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedTier;

  const handleInterestToggle = (interest: string) => {
    if (volunteerForm.interests.includes(interest)) {
      setVolunteerForm({
        ...volunteerForm,
        interests: volunteerForm.interests.filter(i => i !== interest)
      });
    } else {
      setVolunteerForm({
        ...volunteerForm,
        interests: [...volunteerForm.interests, interest]
      });
    }
  };

  const handleStripeLaunch = () => {
    const url = apiService.getStripeUrl();
    apiService.recordDonation({
      amount: activeAmount,
      frequency,
      program: programAllocation,
      type: 'stripe'
    });

    // If it's a test or placeholder URL, open our detailed interactive donation checkout modal
    if (!url || url.includes('test_pathways')) {
      onOpenDonateModal();
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSaveStripeUrl = (e: React.FormEvent) => {
    e.preventDefault();
    apiService.setStripeUrl(stripeUrlInput);
    setStripeConfigSaved(true);
    setTimeout(() => setStripeConfigSaved(false), 3000);
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerForm.name.trim() || !volunteerForm.email.trim() || !volunteerForm.phone.trim()) {
      setVolError('Please complete your name, email, and phone number.');
      return;
    }
    if (volunteerForm.interests.length === 0) {
      setVolError('Please select at least one volunteer interest area.');
      return;
    }

    setVolSubmitting(true);
    setVolError(null);

    try {
      await apiService.submitVolunteerApplication({
        name: volunteerForm.name,
        email: volunteerForm.email,
        phone: volunteerForm.phone,
        city: volunteerForm.city || 'East Collin / Dallas Area',
        interests: volunteerForm.interests,
        availability: volunteerForm.availability,
        message: volunteerForm.message
      });

      setVolSubmitted(true);
      setVolunteerForm({
        name: '',
        email: '',
        phone: '',
        city: '',
        interests: ['Youth Mentoring (Ages 8–17)'],
        availability: 'Tuesday & Wednesday Mornings (9am - 1pm)',
        message: ''
      });
    } catch {
      setVolError('There was an issue saving your application. Please try again.');
    } finally {
      setVolSubmitting(false);
    }
  };

  return (
    <section id="get-involved" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            Get Involved
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Support Local Families & Strengthen Our Community
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether through a tax-deductible financial contribution or volunteering your time to mentor youth and distribute food, your generosity creates real stability.
          </p>
          <div className="w-16 h-1 bg-[#E11D48] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Split: Sub-Section A (Donate) & Sub-Section B (Volunteer) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Sub-Section A: Monetary Giving (Stripe) (#donate) */}
          <div id="donate" className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-[#F9FAFB] border-2 border-slate-900 p-7 sm:p-10 shadow-lg scroll-mt-28">
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Support Local Families
                    </h3>
                    <span className="text-xs font-medium text-slate-500">
                      IRS 501(c)(3) Tax-Deductible Donation
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowStripeConfig(!showStripeConfig)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
                  title="Configure Stripe Payment Link"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              {/* Developer / Admin Stripe Link Configuration Drawer */}
              {showStripeConfig && (
                <div className="mb-6 p-4 rounded-xl bg-white border border-slate-300 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <CreditCard className="w-4 h-4 text-rose-600" /> Stripe Payment Link Setup
                    </span>
                    {stripeConfigSaved && (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Saved!
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    Paste your Stripe Payment Link (e.g., <code>https://buy.stripe.com/...</code>). All [Donate Securely via Stripe] buttons will route donors directly to your live Stripe checkout:
                  </p>
                  <form onSubmit={handleSaveStripeUrl} className="flex gap-2">
                    <input
                      type="url"
                      value={stripeUrlInput}
                      onChange={(e) => setStripeUrlInput(e.target.value)}
                      placeholder="https://buy.stripe.com/..."
                      className="flex-1 px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-rose-500 font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
                    >
                      Save Link
                    </button>
                  </form>
                </div>
              )}

              {/* Copy */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Every gift directly funds emergency shelter, utility security, and youth education in our local communities. All contributions are tax-deductible to the fullest extent of the law.
              </p>

              {/* Frequency Selector: One-Time vs Monthly */}
              <div className="grid grid-cols-2 p-1 bg-white rounded-xl border border-slate-200 mb-6">
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                    frequency === 'monthly'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Monthly Sustainer (Recommended)
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                    frequency === 'one-time'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Gift
                </button>
              </div>

              {/* Preset Amounts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {DONATION_TIERS.map((tier) => (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedTier === tier.amount && !customAmount
                        ? 'border-[#E11D48] bg-rose-50/80 text-rose-700 font-extrabold ring-2 ring-rose-500/20'
                        : 'border-slate-200 bg-white text-slate-800 font-bold hover:border-slate-300'
                    }`}
                  >
                    <span className="text-base sm:text-lg">{tier.label}</span>
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="relative mb-6">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                <input
                  type="number"
                  min="5"
                  step="1"
                  placeholder="Or enter custom dollar amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedTier(0);
                  }}
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              {/* Tangible Impact Description */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 mb-6 text-xs text-slate-600 leading-relaxed flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800">Your Impact: </span>
                  {activeAmount >= 250
                    ? 'Provides emergency housing micro-relief preventing family eviction and displacement.'
                    : activeAmount >= 100
                    ? 'Funds a direct utility grant protecting residential power, heat, and water services.'
                    : activeAmount >= 50
                    ? 'Supplies youth workshops with curriculum books, budgeting labs, and mentoring materials.'
                    : 'Provides wholesome emergency grocery bridge packages with shelf-stable pantry essentials.'}
                </div>
              </div>

              {/* Program Designation Dropdown */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Designate Your Contribution
                </label>
                <select
                  value={programAllocation}
                  onChange={(e) => setProgramAllocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="Where Most Needed">Where Most Needed (Greatest Community Impact)</option>
                  <option value="Emergency Housing & Utilities">Emergency Housing & Utilities Micro-Grants</option>
                  <option value="Food Assistance Bridge">Emergency Food Assistance Bridge</option>
                  <option value="Youth Empowerment Programs">Youth Educational Enrichment & Leadership</option>
                </select>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <button
                onClick={handleStripeLaunch}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-extrabold text-white bg-[#E11D48] hover:bg-[#BE123C] active:scale-[0.98] transition-all shadow-lg shadow-rose-500/25 cursor-pointer"
              >
                <CreditCard className="w-5 h-5 fill-white" />
                <span>Donate Securely via Stripe (${activeAmount || 25}{frequency === 'monthly' ? '/mo' : ''})</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 256-Bit SSL Encrypted
                </span>
                <button
                  type="button"
                  onClick={onOpenDonateModal}
                  className="text-rose-600 hover:underline font-semibold"
                >
                  Pledge In-Kind Goods Instead →
                </button>
              </div>
            </div>

          </div>

          {/* Sub-Section B: Volunteer Sign-Up (#volunteer) */}
          <div id="volunteer" className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-white border border-slate-200 p-7 sm:p-10 shadow-xs scroll-mt-28">
            
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Join Our Volunteer Team
                  </h3>
                  <span className="text-xs font-medium text-slate-500">
                    East Collin & Dallas County Community Engagement
                  </span>
                </div>
              </div>

              {/* Copy */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                We rely on dedicated neighbors to mentor youth and coordinate community impact. Help us distribute food, lead workshops, and strengthen local families.
              </p>

              {volSubmitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-in fade-in duration-300 my-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950 mb-2">
                    Volunteer Application Received!
                  </h4>
                  <p className="text-sm text-emerald-800 leading-relaxed mb-6 max-w-sm mx-auto">
                    Thank you for stepping up to serve your community. Our volunteer coordinator will reach out to schedule an orientation.
                  </p>
                  <button
                    onClick={() => setVolSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-emerald-900 bg-emerald-200 hover:bg-emerald-300 transition-colors"
                  >
                    <span>Register Another Volunteer</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  {volError && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-50 text-rose-700 text-xs border border-rose-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{volError}</span>
                    </div>
                  )}

                  {/* Interest Checklist (As per spec) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Interest Areas <span className="text-rose-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {[
                        'Youth Mentoring (Ages 8–17)',
                        'Event Support & Distribution',
                        'Community Outreach & Awareness'
                      ].map((interest) => {
                        const checked = volunteerForm.interests.includes(interest);
                        return (
                          <label
                            key={interest}
                            onClick={() => handleInterestToggle(interest)}
                            className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                              checked
                                ? 'border-[#E11D48] bg-rose-50/60 text-slate-900'
                                : 'border-slate-200 bg-[#F9FAFB] text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                              checked ? 'bg-[#E11D48] border-[#E11D48] text-white' : 'border-slate-300 bg-white'
                            }`}>
                              {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span>{interest}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>

                  {/* Phone and City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        placeholder="(972) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        City / Community
                      </label>
                      <select
                        value={volunteerForm.city}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                      >
                        <option value="">Select your city...</option>
                        {SERVICE_CITIES.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                        <option value="Other Area">Other Collin / Dallas County</option>
                      </select>
                    </div>
                  </div>

                  {/* Availability / Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Availability & Message
                    </label>
                    <textarea
                      rows={2}
                      value={volunteerForm.message}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                      placeholder="e.g., Available Tuesday mornings for food packing or Saturday youth workshops."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={volSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border-2 border-slate-900 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      {volSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-rose-600" />
                          <span>Submit Volunteer Application</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
