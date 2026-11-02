import React from 'react';
import { ShieldCheck, Heart, Users, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICE_CITIES } from '../data/mockData';

interface HeroProps {
  onOpenDonateModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonateModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-white via-[#FAF5F7] to-[#F9FAFB]">
      
      {/* Subtle background ambient elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-rose-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-slate-200/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Narrative & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pre-header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
              <span>501(c)(3) Public Charity · Serving Eastern Collin & Dallas Counties</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6 text-balance">
              Breaking Generational Poverty by Supporting Children and Stabilizing Families.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Pathways Assistance Center provides emergency financial bridge support, food assistance, and youth educational enrichment across Wylie, Murphy, Lavon, Rockwall, Rowlett, and Sachse.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenDonateModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-[#E11D48] hover:bg-[#BE123C] active:scale-[0.98] transition-all shadow-lg shadow-rose-500/25 cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Support Our Mission</span>
              </button>

              <a
                href="#resources"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-900 bg-white hover:bg-slate-50 border-2 border-slate-900 active:scale-[0.98] transition-all shadow-xs"
              >
                <span>Community Resources</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service Area City Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 w-full text-xs text-slate-500">
              <span className="font-semibold text-slate-700 flex items-center gap-1 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-rose-600" /> Service Area:
              </span>
              {SERVICE_CITIES.map((city, idx) => (
                <span key={city} className="inline-flex items-center">
                  <span className="hover:text-slate-900 transition-colors">{city}</span>
                  {idx < SERVICE_CITIES.length - 1 && <span className="mx-1 text-slate-300">·</span>}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Community Impact Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-200/50">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Direct Texas Impact</h3>
                    <p className="text-xs text-slate-500">Grassroots Stabilization</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                  Est. 2020
                </span>
              </div>

              {/* Impact Metrics Trio */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">100%</div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">Direct-to-Vendor Housing & Utility Relief</div>
                </div>
                <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 tabular-nums">Ages 8–17</div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">Youth Empowerment & Financial Labs</div>
                </div>
              </div>

              {/* Core Commitment Highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dignity First:</strong> Confidential intake honoring every family with total respect.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Housing Stability:</strong> Micro-grants intervene before displacement or utility shut-off.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Local Collaboration:</strong> Tight coordination with Collin County partner agencies.</span>
                </div>
              </div>

              {/* Action Banner inside Card */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Are you a neighbor in need?
                </div>
                <a
                  href="#resources"
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                >
                  <span>View Safety Net</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Section 1 Credibility Bar (3 Badges) */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Badge 1: Candid / GuideStar Recognized Organization */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-rose-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Candid / GuideStar Recognized</div>
                <div className="text-xs text-slate-500 mt-0.5">Committed to transparency and nonprofit accountability</div>
              </div>
            </div>

            {/* Badge 2: 100% Tax-Deductible Contributions */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">100% Tax-Deductible</div>
                <div className="text-xs text-slate-500 mt-0.5">IRS Recognized 501(c)(3) public charity status</div>
              </div>
            </div>

            {/* Badge 3: Grassroots Texas Nonprofit Founded in 2020 */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200">
                <Users className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Grassroots Texas Nonprofit</div>
                <div className="text-xs text-slate-500 mt-0.5">Founded in 2020 to serve Collin & Dallas county neighbors</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
