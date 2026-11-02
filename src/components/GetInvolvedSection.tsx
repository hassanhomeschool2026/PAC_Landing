import React, { useState } from 'react';
import { DONATION_TIERS, LINKS, SERVICE_CITIES } from '../data/mockData';
import { 
  Heart, 
  Users, 
  ShieldCheck, 
  ExternalLink, 
  CreditCard,
  Sparkles,
  Package,
  Settings,
  Check,
  FileText
} from 'lucide-react';

export const GetInvolvedSection: React.FC = () => {
  // Donation State
  const [selectedTier, setSelectedTier] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [programAllocation, setProgramAllocation] = useState<string>('Where Most Needed');
  
  // Configurable Stripe & Google Form links (persists in state/browser for quick user testing)
  const [stripeLink, setStripeLink] = useState<string>(() => {
    return localStorage.getItem('pac_custom_stripe') || LINKS.STRIPE_DONATION_URL;
  });
  const [googleFormUrl, setGoogleFormUrl] = useState<string>(() => {
    return localStorage.getItem('pac_custom_volunteer_form') || LINKS.GOOGLE_FORM_VOLUNTEER_DIRECT;
  });
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [savedNotice, setSavedNotice] = useState<boolean>(false);

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedTier;

  const handleSaveLinks = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('pac_custom_stripe', stripeLink);
    localStorage.setItem('pac_custom_volunteer_form', googleFormUrl);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <section id="get-involved" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#fdf5f5] text-black border border-[#f3c2c3] text-xs font-bold tracking-wider uppercase mb-3">
            Get Involved
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
            Support Local Families & Strengthen Our Community
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether through a tax-deductible financial gift or joining our volunteer team to mentor youth and distribute food, your generosity creates real stability.
          </p>
          <div className="w-16 h-1 bg-[#e79a9b] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Split: Sub-Section A (Donate via Stripe) & Sub-Section B (Volunteer Google Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sub-Section A: Monetary Giving (Stripe) (#donate) */}
          <div id="donate" className="lg:col-span-5 rounded-3xl bg-white border-2 border-black p-7 sm:p-9 shadow-xl scroll-mt-28 flex flex-col justify-between">
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-[#e79a9b] fill-[#e79a9b]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black">
                      Support Local Families
                    </h3>
                    <span className="text-xs font-semibold text-slate-500">
                      IRS 501(c)(3) Tax-Deductible Donation
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowConfig(!showConfig)}
                  className="p-2 text-slate-400 hover:text-black rounded-lg transition-colors cursor-pointer"
                  title="Configure Live Stripe Link"
                  aria-label="Configure Stripe Link"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              {/* Optional Config drawer for user to test their exact Stripe Payment Link */}
              {showConfig && (
                <div className="mb-6 p-4 rounded-xl bg-[#fdf5f5] border border-[#f3c2c3] text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-black flex items-center gap-1">
                      <CreditCard className="w-4 h-4 text-[#e79a9b]" /> Live Stripe Link Setup
                    </span>
                    {savedNotice && (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Saved!
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 mb-2 leading-relaxed">
                    Paste your live Stripe Payment Link (e.g. <code>https://buy.stripe.com/...</code>):
                  </p>
                  <form onSubmit={handleSaveLinks} className="space-y-2">
                    <input
                      type="url"
                      value={stripeLink}
                      onChange={(e) => setStripeLink(e.target.value)}
                      placeholder="https://buy.stripe.com/..."
                      className="w-full px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-black font-mono bg-white"
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded-lg bg-black text-white font-bold hover:bg-slate-800 transition-colors"
                      >
                        Save Link
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Copy */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Every gift directly funds emergency shelter, utility security, and youth education in our local communities. All contributions are tax-deductible to the fullest extent of the law.
              </p>

              {/* Frequency Selector: One-Time vs Monthly */}
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl border border-slate-200 mb-6">
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                    frequency === 'monthly'
                      ? 'bg-black text-white shadow-xs'
                      : 'text-slate-600 hover:text-black'
                  }`}
                >
                  Monthly Sustainer
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                    frequency === 'one-time'
                      ? 'bg-black text-white shadow-xs'
                      : 'text-slate-600 hover:text-black'
                  }`}
                >
                  One-Time Gift
                </button>
              </div>

              {/* Preset Amounts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {DONATION_TIERS.map((tier) => (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-2 rounded-xl border-2 text-center transition-all cursor-pointer ${
                      selectedTier === tier.amount && !customAmount
                        ? 'border-black bg-[#fdf5f5] text-black font-extrabold ring-2 ring-[#e79a9b]/50'
                        : 'border-slate-200 bg-white text-slate-800 font-bold hover:border-slate-400'
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
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Tangible Impact Description */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs text-slate-600 leading-relaxed flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#e79a9b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-black">Your Impact: </span>
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="Where Most Needed">Where Most Needed (Greatest Community Impact)</option>
                  <option value="Emergency Housing & Utilities">Emergency Housing & Utilities Micro-Grants</option>
                  <option value="Food Assistance Bridge">Emergency Food Assistance Bridge</option>
                  <option value="Youth Empowerment Programs">Youth Educational Enrichment & Leadership</option>
                </select>
              </div>
            </div>

            {/* Bottom Actions linking directly to Stripe */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <a
                href={stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-extrabold text-black bg-[#e79a9b] hover:bg-[#d98586] active:scale-[0.98] transition-all shadow-md border border-[#d98586]/60 cursor-pointer text-center"
              >
                <CreditCard className="w-5 h-5 fill-black" />
                <span>Donate Securely via Stripe (${activeAmount || 25}{frequency === 'monthly' ? '/mo' : ''})</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-black" /> 256-Bit SSL Encrypted via Stripe
                </span>
                <span className="text-black font-bold">
                  IRS 501(c)(3) Recognized
                </span>
              </div>

              {/* In-Kind Note */}
              <div className="p-3.5 rounded-xl bg-[#fdf5f5] border border-[#f3c2c3] text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-black mb-1">
                  <Package className="w-4 h-4 text-[#e79a9b]" />
                  <span>Prefer to Donate Physical Items?</span>
                </div>
                <p className="leading-relaxed">
                  We accept new children’s clothing & shoes (ages 4–17), unopened personal care toiletries, and non-perishable pantry foods. Email us at <a href={`mailto:${LINKS.EMAIL_DONATE}`} className="font-bold underline text-black hover:text-[#b35759]">{LINKS.EMAIL_DONATE}</a> to coordinate drop-off.
                </p>
              </div>
            </div>

          </div>

          {/* Sub-Section B: Volunteer Sign-Up with Embedded Google Form (#volunteer) */}
          <div id="volunteer" className="lg:col-span-7 rounded-3xl bg-white border-2 border-black p-7 sm:p-9 shadow-xl scroll-mt-28">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 mb-6 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#e79a9b]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black">
                    Join Our Volunteer Team
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    East Collin & Dallas County Community Engagement
                  </span>
                </div>
              </div>

              {/* Direct Link to open Google Form in New Window */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold text-black bg-[#fdf5f5] hover:bg-[#fae7e8] border border-[#f3c2c3] transition-colors whitespace-nowrap shadow-xs"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Copy */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
              We rely on dedicated neighbors to mentor youth and coordinate community impact. Complete our official volunteer application below to get connected with upcoming opportunities.
            </p>

            {/* Interest Areas Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'Youth Mentoring (Ages 8–17)',
                'Event Support & Distribution',
                'Community Outreach & Awareness'
              ].map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#fdf5f5] text-black border border-[#f3c2c3]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#e79a9b]" />
                  <span>{interest}</span>
                </span>
              ))}
            </div>

            {/* Embedded Google Form Container */}
            <div className="relative rounded-2xl border-2 border-slate-200 overflow-hidden bg-slate-50 shadow-inner">
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-bold text-black">
                  <FileText className="w-3.5 h-3.5 text-[#e79a9b]" />
                  <span>Official Google Form: Pathways Volunteer Sign-Up</span>
                </span>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black hover:underline inline-flex items-center gap-1"
                >
                  <span>Trouble viewing? Open direct link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Form iframe */}
              <iframe
                src={googleFormUrl.includes('?') ? `${googleFormUrl}&embedded=true` : `${googleFormUrl}?embedded=true`}
                width="100%"
                height="620"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full bg-white"
                title="Pathways Assistance Center Volunteer Registration Form"
              >
                Loading Google Form…
              </iframe>
            </div>

            {/* Helper footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <span>All volunteer applications are submitted directly into Pathways Assistance Center's Google Workspace.</span>
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-black underline decoration-[#e79a9b] decoration-2 hover:text-[#b35759] shrink-0"
              >
                Open Fullscreen Form →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
