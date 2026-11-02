import React, { useState } from 'react';
import { PARTNER_RESOURCES, SERVICE_CITIES } from '../data/mockData';
import { apiService } from '../services/apiService';
import { Phone, Globe, ExternalLink, Send, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    email: '',
    assistanceType: 'Rental / Mortgage' as const,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, contact information, and a brief description of your request.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await apiService.submitAssistanceInquiry({
        name: formData.name,
        city: formData.city || 'Service Area Neighbor',
        phone: formData.phone,
        email: formData.email,
        assistanceType: formData.assistanceType,
        message: formData.message
      });

      setSubmitted(true);
      setFormData({
        name: '',
        city: '',
        phone: '',
        email: '',
        assistanceType: 'Rental / Mortgage',
        message: ''
      });
    } catch {
      setErrorMessage('There was an issue recording your request. Please try again or reach out directly to info@pathwaysac.org.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="resources" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            Need Help?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Regional Safety Net & Assistance Inquiries
          </h2>
          <div className="w-16 h-1 bg-[#E11D48] mx-auto mt-4 rounded-full" />
        </div>

        {/* Funding & Status Note Alert */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-amber-50/80 border border-amber-200 p-6 sm:p-7 mb-14 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wide">
                Funding & Assistance Status Note
              </h4>
              <p className="mt-1 text-sm sm:text-base text-amber-900 leading-relaxed font-normal">
                “Direct assistance grants are administered based on active funding and grant cycles. To ensure families in acute crisis receive help immediately, we work closely with our regional partner agencies across Collin County.”
              </p>
            </div>
          </div>
        </div>

        {/* Partner Safety Net Grid (3 Cards) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">
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
                className="rounded-2xl bg-[#F9FAFB] border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-200/70 text-slate-700 inline-block mb-3">
                    {partner.bestFor}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {partner.services}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-slate-800 font-semibold">
                    <Phone className="w-4 h-4 text-rose-600 shrink-0" />
                    <a href={`tel:${partner.phone.replace(/[^0-9]/g, '')}`} className="hover:text-rose-600 transition-colors">
                      {partner.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-600 hover:text-rose-700 hover:underline inline-flex items-center gap-1 font-medium"
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

        {/* Assistance Inquiry Form Box */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-white border-2 border-slate-900 p-7 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
              <Send className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Direct Assistance Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Inquiries are routed directly to <span className="font-semibold text-slate-700">info@pathwaysac.org</span> for confidential review.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-emerald-950 mb-2">
                Inquiry Received Confidentially
              </h4>
              <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed mb-6">
                Thank you for reaching out. Our intake coordinators review messages in accordance with active program availability and will contact you via email or phone.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-emerald-900 bg-emerald-200 hover:bg-emerald-300 transition-colors"
              >
                <span>Submit Another Request</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-50 text-rose-700 text-sm border border-rose-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="inq-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="inq-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="First & Last Name"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="inq-city" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    City / Zip Code
                  </label>
                  <select
                    id="inq-city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm text-slate-900 bg-white"
                  >
                    <option value="">Select your city or community...</option>
                    {SERVICE_CITIES.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                    <option value="Other Collin County">Other Collin County Community</option>
                    <option value="Other Dallas County">Other Dallas County Community</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="inq-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="inq-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(972) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="inq-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="inq-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inq-type" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Type of Assistance Requested
                </label>
                <select
                  id="inq-type"
                  value={formData.assistanceType}
                  onChange={(e) => setFormData({ ...formData, assistanceType: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm text-slate-900 bg-white"
                >
                  <option value="Rental / Mortgage">Housing / Rent / Mortgage Relief</option>
                  <option value="Electric / Water / Gas Utilities">Utility Protection (Electric, Gas, Water)</option>
                  <option value="Food Assistance">Food Assistance Bridge</option>
                  <option value="Youth Programs">Youth Educational Enrichment & Workshops</option>
                  <option value="Other Emergency Need">Other Emergency Family Need</option>
                </select>
              </div>

              <div>
                <label htmlFor="inq-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brief Description of Your Situation <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="inq-message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe how we can assist you, how many children are in your household, and if you have upcoming disconnection notices."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm text-slate-900 bg-white"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  All submissions are handled with strict privacy & confidentiality.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 active:scale-[0.98] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-rose-400" />
                      <span>Send Confidential Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
