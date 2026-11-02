import React from 'react';
import { PARTNER_RESOURCES, LINKS } from '../data/mockData';
import { Phone, Globe, ExternalLink, Mail, Info, FileText } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#fdf5f5] text-black border border-[#f3c2c3] text-xs font-bold tracking-wider uppercase mb-3">
            Need Help?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
            Regional Safety Net & Assistance Inquiries
          </h2>
          <div className="w-16 h-1 bg-[#e79a9b] mx-auto mt-4 rounded-full" />
        </div>

        {/* Funding & Status Note Alert */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#fdf5f5] border border-[#f3c2c3] p-6 sm:p-7 mb-14 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#f3c2c3] text-black flex items-center justify-center shrink-0">
              <Info className="w-5 h-5 text-[#e79a9b]" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-black uppercase tracking-wider">
                Funding & Assistance Status Note
              </h4>
              <p className="mt-1 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                “Direct assistance grants are administered based on active funding and grant cycles. To ensure families in acute crisis receive help immediately, we work closely with our regional partner agencies across Collin County.”
              </p>
            </div>
          </div>
        </div>

        {/* Partner Safety Net Grid (3 Cards) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-black">
              Collin County & Texas Safety Net Partners
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Immediate Crisis Resources
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARTNER_RESOURCES.map((partner) => (
              <div
                key={partner.id}
                className="rounded-2xl bg-white border-2 border-slate-200 p-6 flex flex-col justify-between hover:border-black hover:shadow-lg transition-all"
              >
                <div>
                  <div className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#fdf5f5] text-black border border-[#f3c2c3] inline-block mb-3">
                    {partner.bestFor}
                  </div>
                  <h4 className="text-lg font-bold text-black leading-snug mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {partner.services}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-black font-bold">
                    <Phone className="w-4 h-4 text-[#e79a9b] shrink-0" />
                    <a href={`tel:${partner.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                      {partner.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-[#b35759] font-semibold underline decoration-[#e79a9b] decoration-2 inline-flex items-center gap-1"
                    >
                      <span>{partner.websiteDisplay}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Assistance Inquiries Box via Google Forms & Email */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-black text-white border-2 border-black p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-[#e79a9b]">
                <FileText className="w-3.5 h-3.5" />
                <span>Google Forms Direct Intake</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Submit an Assistance Inquiry
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                If you or a family you know needs emergency support, please complete our confidential Google Form or reach out directly to our intake team.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs text-slate-300">
                <a
                  href={`mailto:${LINKS.EMAIL_INFO}`}
                  className="flex items-center gap-2 hover:text-[#e79a9b] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#e79a9b]" />
                  <span>{LINKS.EMAIL_INFO}</span>
                </a>
                <a
                  href={`tel:${LINKS.PHONE_NUMERIC}`}
                  className="flex items-center gap-2 hover:text-[#e79a9b] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#e79a9b]" />
                  <span>{LINKS.PHONE_PRIMARY}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href={LINKS.GOOGLE_FORM_INQUIRY_DIRECT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold text-black bg-[#e79a9b] hover:bg-[#d98586] transition-all shadow-md text-center whitespace-nowrap cursor-pointer"
              >
                <span>Open Inquiry Google Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${LINKS.EMAIL_INFO}?subject=Assistance%20Inquiry%20-%20Pathways%20Assistance%20Center`}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors text-center whitespace-nowrap"
              >
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
