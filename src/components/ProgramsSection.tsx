import React, { useState } from 'react';
import { SERVICE_PILLARS } from '../data/mockData';
import { CheckCircle2, ArrowRight, ShieldCheck, Heart, Sparkles, Building2, Apple, GraduationCap } from 'lucide-react';

export const ProgramsSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('financial-assistance');

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'financial-assistance':
        return Building2;
      case 'food-assistance':
        return Apple;
      case 'youth-empowerment':
        return GraduationCap;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="programs" className="py-20 bg-slate-50/50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#fdf5f5] text-black border border-[#f3c2c3] text-xs font-bold tracking-wider uppercase mb-3">
            Core Service Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
            Targeted Programs That Stabilize & Empower
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our three core focus areas address immediate family stabilization while creating sustainable pathways forward for children and parents.
          </p>
          <div className="w-16 h-1 bg-[#e79a9b] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Pillar Bento Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {SERVICE_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.id);
            const isSelected = selectedPillarId === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`relative flex flex-col justify-between rounded-2xl bg-white border-2 p-7 transition-all duration-200 cursor-pointer shadow-xs ${
                  isSelected
                    ? 'border-black ring-2 ring-[#e79a9b]/40 shadow-lg'
                    : 'border-slate-200 hover:border-black hover:shadow-md'
                }`}
              >
                <div>
                  {/* Pillar Number & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                      PILLAR {pillar.pillarNumber}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#fdf5f5] text-black border border-[#f3c2c3]">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#e79a9b]" />
                    </div>
                    <h3 className="text-xl font-bold text-black leading-snug">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Focus Statement */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5 text-sm text-slate-800 font-medium leading-relaxed">
                    <strong className="text-black">Focus:</strong> {pillar.focus}
                  </div>

                  {/* Details Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.details}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {pillar.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact Indicator & Action */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Accountability</span>
                    <span className="text-sm font-bold text-black">{pillar.impactStat}</span>
                  </div>
                  <a
                    href="#donate"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs font-bold text-black hover:text-[#b35759] group/btn underline decoration-[#e79a9b] decoration-2 underline-offset-4"
                  >
                    <span>Support Program</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accountability & Direct-to-Vendor Callout */}
        <div className="rounded-2xl bg-white border-2 border-black p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#e79a9b]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-black">100% Direct-to-Vendor Integrity</h4>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Financial assistance grants for housing and utility payments are made directly to certified utility companies, municipal providers, and verified property managers—preventing misuse and guaranteeing immediate household relief.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="#donate"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-black bg-[#e79a9b] hover:bg-[#d98586] transition-colors shadow-xs border border-[#d98586]/60 text-center"
            >
              <Heart className="w-4 h-4 fill-black" />
              <span>Fund a Grant</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
