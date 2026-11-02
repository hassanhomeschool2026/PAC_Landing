import React from 'react';
import { HeartHandshake, Home, Sparkles, Building2, Quote } from 'lucide-react';

export const MissionSection: React.FC = () => {
  const coreBeliefs = [
    {
      icon: HeartHandshake,
      title: 'Dignity Above All',
      description: 'Needing assistance should never diminish personal worth. Every intake and conversation is handled with confidentiality, respect, and zero judgment.'
    },
    {
      icon: Home,
      title: 'Family Housing Stability',
      description: 'Keeping a roof over children’s heads and essential utilities active prevents trauma and keeps kids focused on school and thriving.'
    },
    {
      icon: Sparkles,
      title: 'Youth-Level Education',
      description: 'Generational poverty is dismantled when we equip young people with financial literacy, communication skills, and personal confidence.'
    },
    {
      icon: Building2,
      title: 'Community Stewardship',
      description: 'Direct-to-vendor payments and close partnerships across Collin and Dallas counties ensure every dollar goes where it is needed most.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            Our Mission & Core Beliefs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Dignity, Respect, and Long-Term Stability
          </h2>
          <div className="w-16 h-1 bg-[#E11D48] mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlighted Quote Narrative Box */}
        <div className="relative max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-12 shadow-xl mb-16 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-rose-600/30 border border-rose-500/40 flex items-center justify-center shrink-0">
              <Quote className="w-6 h-6 text-rose-400" />
            </div>
            
            <div>
              <blockquote className="text-lg sm:text-xl font-normal text-slate-100 leading-relaxed italic mb-6">
                “We know what it’s like to need a helping hand at least once in our lives. The core of our work is stabilizing families and educating starting at the youth level. Generational poverty is broken when we offer support to children and ensure their homes remain secure. We believe that needing help should never come at the cost of human dignity—everyone deserves to be treated with honor, confidentiality, and respect. Through emergency stabilization and youth programs, we are committed to paving paths that strengthen families and our communities.”
              </blockquote>
              
              <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-sm font-bold text-white tracking-wide">Pathways Assistance Center</div>
                  <div className="text-xs text-rose-300">Guiding Principle & Texas 501(c)(3) Charter</div>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Established 2020 · Texas Nonprofit
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreBeliefs.map((belief) => {
            const Icon = belief.icon;
            return (
              <div
                key={belief.title}
                className="p-6 rounded-xl bg-[#F9FAFB] border border-slate-200 hover:border-rose-300 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-rose-600 flex items-center justify-center mb-4 group-hover:bg-[#E11D48] group-hover:text-white transition-colors shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {belief.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {belief.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
