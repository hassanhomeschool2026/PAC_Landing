import React from 'react';
import { Phone, Mail, Printer, Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import { SERVICE_CITIES, LINKS } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black text-slate-300 pt-16 pb-12 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Service Territory Strip */}
        <div className="pb-12 mb-12 border-b border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#e79a9b] block mb-1">
                Regional Service Territory
              </span>
              <p className="text-sm text-slate-300 font-medium">
                Proudly serving families in <span className="text-white font-bold">{SERVICE_CITIES.join(', ')}, Texas</span>.
              </p>
            </div>

            <a
              href="#donate"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-[#e79a9b] hover:bg-[#d98586] transition-colors shrink-0 shadow-sm border border-[#d98586]/60"
            >
              <Heart className="w-4 h-4 fill-black" />
              <span>Donate Now</span>
            </a>
          </div>
        </div>

        {/* 4-Column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Brand Info & Mission Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center p-2">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 34C10 24 18 16 34 14" stroke="#e79a9b" strokeWidth="4" strokeLinecap="round" />
                  <path d="M12 34C15 27 21 21 34 20" stroke="#f3c2c3" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 3" />
                  <circle cx="28" cy="11" r="5" fill="#e79a9b" />
                  <path d="M28 8.5C27 7 25 7 24 8.5C23 10 25 12 28 14C31 12 33 10 32 8.5Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white block">
                  Pathways Assistance Center
                </span>
                <span className="text-xs text-[#e79a9b] font-semibold">
                  501(c)(3) Public Charity · Founded 2020
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated to breaking generational poverty through direct emergency stabilization, food assistance, and youth educational workshops across Eastern Collin and Dallas counties.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#e79a9b]" />
              <span>100% Tax-Deductible Contributions under IRS Section 501(c)(3)</span>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-[#e79a9b] transition-colors">Our Mission</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#e79a9b] transition-colors">Core Pillars</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-[#e79a9b] transition-colors">Community Resources</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#e79a9b] transition-colors">Events & Workshops</a>
              </li>
              <li>
                <a href="#volunteer" className="hover:text-[#e79a9b] transition-colors">Volunteer Sign-Up</a>
              </li>
              <li>
                <a href="#donate" className="hover:text-[#e79a9b] transition-colors">Monetary Giving</a>
              </li>
            </ul>
          </div>

          {/* Official Mailing Address (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Official Mailing Address
            </h4>
            <div className="text-sm text-slate-400 space-y-1">
              <p className="text-white font-semibold">Pathways Assistance Center</p>
              <p>{LINKS.ADDRESS_LINE1}</p>
              <p>{LINKS.ADDRESS_LINE2}</p>
            </div>
            <div className="pt-2 text-xs text-slate-500">
              Mailing operations and administrative registry.
            </div>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e79a9b] shrink-0" />
                <a href={`tel:${LINKS.PHONE_NUMERIC}`} className="hover:text-white transition-colors">
                  Phone: {LINKS.PHONE_PRIMARY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-[#e79a9b] shrink-0" />
                <span>Fax: {LINKS.FAX}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e79a9b] shrink-0" />
                <a href={`mailto:${LINKS.EMAIL_INFO}`} className="hover:text-white transition-colors">
                  Email: {LINKS.EMAIL_INFO}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-xs text-slate-500 block">General Inquiries & Intake:</span>
              <span className="text-xs text-slate-400">{LINKS.EMAIL_INFO}</span>
            </div>
          </div>

        </div>

        {/* Legal Attribution & Scroll Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 Pathways Assistance Center. All Rights Reserved. Pathways Assistance Center is a registered 501(c)(3) tax-exempt public charity.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1 cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
