import React from 'react';
import { ShieldCheck, Heart, Users, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICE_CITIES } from '../data/mockData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-white via-[#fefafb] to-white">
      
      {/* Subtle background ambient elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#fceeee]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-slate-100/70 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Narrative & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pre-header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf5f5] border border-[#f3c2c3] text-black text-xs sm:text-sm font-bold mb-6 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e79a9b] shrink-0" />
              <span>501(c)(3) Public Charity · Serving Eastern Collin & Dallas Counties</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-[1.15] mb-6 text-balance">
              Breaking Generational Poverty by Supporting Children and Stabilizing Families.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl font-normal">
              Pathways Assistance Center provides emergency financial bridge support, food assistance, and youth educational enrichment across Wylie, Murphy, Lavon, Rockwall, Rowlett, and Sachse.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#donate"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-extrabold text-black bg-[#e79a9b] hover:bg-[#d98586] active:scale-[0.98] transition-all shadow-md shadow-[#e79a9b]/25 border border-[#d98586]/60 cursor-pointer text-center"
              >
                <Heart className="w-5 h-5 fill-black" />
                <span>Support Our Mission</span>
              </a>

              <a
                href="#resources"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-black bg-white hover:bg-slate-50 border-2 border-black active:scale-[0.98] transition-all shadow-xs text-center"
              >
                <span>Community Resources</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service Area City Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200 w-full text-xs text-slate-600">
              <span className="font-bold text-black flex items-center gap-1 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#e79a9b]" /> Service Area:
              </span>
              {SERVICE_CITIES.map((city, idx) => (
                <span key={city} className="inline-flex items-center font-medium">
                  <span className="hover:text-black transition-colors">{city}</span>
                  {idx < SERVICE_CITIES.length - 1 && <span className="mx-1 text-slate-300">·</span>}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Community Impact Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border-2 border-black p-6 sm:p-8 shadow-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fdf5f5] border border-[#f3c2c3] text-black flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6 text-[#e79a9b]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">Direct Texas Impact</h3>
                    <p className="text-xs text-slate-500 font-medium">Grassroots Family Stabilization</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-black text-white">
                  Est. 2020
                </span>
              </div>

              {/* Impact Metrics Duo */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl sm:text-3xl font-extrabold text-black tabular-nums">100%</div>
                  <div className="text-xs text-slate-600 mt-1 font-semibold">Direct-to-Vendor Housing & Utility Relief</div>
                </div>
                <div className="p-4 rounded-xl bg-[#fdf5f5] border border-[#f3c2c3]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-black tabular-nums">Ages 8–17</div>
                  <div className="text-xs text-slate-700 mt-1 font-semibold">Youth Empowerment & Financial Labs</div>
                </div>
              </div>

              {/* Core Commitment Highlights */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Dignity First:</strong> Confidential intake honoring every family with total respect.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Housing Stability:</strong> Micro-grants intervene before displacement or utility shut-off.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Community Trust:</strong> Transparent Texas 501(c)(3) grassroots public charity.</span>
                </div>
              </div>

              {/* Action Banner inside Card */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-medium">
                  Need crisis support or pantry aid?
                </div>
                <a
                  href="#resources"
                  className="text-xs font-bold text-black hover:text-[#b35759] flex items-center gap-1 underline decoration-[#e79a9b] decoration-2"
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
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#e79a9b]" />
              </div>
              <div>
                <div className="text-sm font-bold text-black">Candid / GuideStar Recognized</div>
                <div className="text-xs text-slate-500 mt-0.5">Committed to transparency and nonprofit accountability</div>
              </div>
            </div>

            {/* Badge 2: 100% Tax-Deductible Contributions */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#fdf5f5] text-black flex items-center justify-center shrink-0 border border-[#f3c2c3]">
                <ShieldCheck className="w-6 h-6 text-[#e79a9b]" />
              </div>
              <div>
                <div className="text-sm font-bold text-black">100% Tax-Deductible</div>
                <div className="text-xs text-slate-500 mt-0.5">IRS Recognized 501(c)(3) public charity status</div>
              </div>
            </div>

            {/* Badge 3: Grassroots Texas Nonprofit Founded in 2020 */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-black text-white flex items-center justify-center shrink-0 border border-slate-800">
                <Users className="w-6 h-6 text-[#e79a9b]" />
              </div>
              <div>
                <div className="text-sm font-bold text-black">Grassroots Texas Nonprofit</div>
                <div className="text-xs text-slate-500 mt-0.5">Founded in 2020 to serve Collin & Dallas county neighbors</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
