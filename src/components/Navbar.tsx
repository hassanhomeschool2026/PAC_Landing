import React, { useState } from 'react';
import { Menu, X, Heart, ExternalLink, Calendar, Users, HelpCircle, BookOpen, MapPin } from 'lucide-react';
import { LINKS } from '../data/mockData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', icon: BookOpen },
    { name: 'Programs', href: '#programs', icon: HelpCircle },
    { name: 'Resources', href: '#resources', icon: MapPin },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Volunteer', href: '#volunteer', icon: Users },
    { name: 'Contact', href: '#contact', icon: ExternalLink }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Brand Wordmark & Official Pink, Black, and White Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0" aria-label="Pathways Assistance Center Home">
            <div className="w-11 h-11 rounded-xl bg-black border border-slate-800 flex items-center justify-center p-2 shadow-xs group-hover:border-[#e79a9b] transition-colors">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Pathway arches and rising heart in PAC Pink (#e79a9b) and White */}
                <path d="M6 34C10 24 18 16 34 14" stroke="#e79a9b" strokeWidth="4" strokeLinecap="round" />
                <path d="M12 34C15 27 21 21 34 20" stroke="#f3c2c3" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 3" />
                <circle cx="28" cy="11" r="5" fill="#e79a9b" />
                <path d="M28 8.5C27 7 25 7 24 8.5C23 10 25 12 28 14C31 12 33 10 32 8.5C31 7 29 7 28 8.5Z" fill="#FFFFFF" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-black leading-none group-hover:text-[#b35759] transition-colors">
                Pathways Assistance Center
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-1">
                501(c)(3) Community Support & Youth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-black hover:underline decoration-[#e79a9b] decoration-2 underline-offset-8 transition-colors py-2 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Donate Now (High-contrast PAC Pink Button linking to #donate or Stripe) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold text-black bg-[#e79a9b] hover:bg-[#d98586] active:scale-[0.98] transition-all shadow-sm border border-[#d98586]/50 whitespace-nowrap"
            >
              <Heart className="w-4 h-4 fill-black" />
              <span>Donate Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#donate"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-[#e79a9b] hover:bg-[#d98586] transition-colors"
            >
              <Heart className="w-3.5 h-3.5 fill-black" />
              <span>Donate</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-black hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#e79a9b]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-bold text-slate-800 hover:bg-[#fdf5f5] hover:text-black transition-colors"
                >
                  <Icon className="w-5 h-5 text-slate-500" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-extrabold text-black bg-[#e79a9b] hover:bg-[#d98586] transition-colors shadow-xs"
              >
                <Heart className="w-5 h-5 fill-black" />
                <span>Donate Securely via Stripe</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
