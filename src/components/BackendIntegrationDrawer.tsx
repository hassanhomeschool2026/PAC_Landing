import React, { useState } from 'react';
import { Database, Code2, Mail, Copy, Check, X, Terminal, ExternalLink, RefreshCw, FileText } from 'lucide-react';
import { apiService } from '../services/apiService';

export const BackendIntegrationDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'supabase' | 'resend' | 'records'>('supabase');
  const [copied, setCopied] = useState<string | null>(null);

  const guide = apiService.getBackendIntegrationGuide();

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  };

  // Live storage inspector
  const getStoredData = () => {
    try {
      return {
        rsvps: JSON.parse(localStorage.getItem('pac_event_rsvps') || '[]'),
        volunteers: JSON.parse(localStorage.getItem('pac_volunteers') || '[]'),
        inquiries: JSON.parse(localStorage.getItem('pac_inquiries') || '[]'),
        donations: JSON.parse(localStorage.getItem('pac_donations') || '[]')
      };
    } catch {
      return { rsvps: [], volunteers: [], inquiries: [], donations: [] };
    }
  };

  const stored = getStoredData();

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold shadow-lg border border-slate-700 hover:border-rose-500 transition-all cursor-pointer group"
          title="Open Developer Architecture & Backend Guide"
        >
          <Database className="w-3.5 h-3.5 text-rose-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Backend Guide & Schemas</span>
          <span className="inline-block sm:hidden">Backend Guide</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
        </button>
      </div>

      {/* Slide-over Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl max-h-[88vh] flex flex-col rounded-3xl bg-slate-950 text-white shadow-2xl border border-slate-800 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-rose-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Frontend Architecture & Backend Wiring
                  </h3>
                  <p className="text-xs text-slate-400">
                    Ready-to-deploy contracts for Supabase, Netlify, and Resend
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close backend guide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 pt-4 pb-3 border-b border-slate-800/80 shrink-0 overflow-x-auto text-xs font-semibold">
              <button
                onClick={() => setActiveTab('supabase')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'supabase'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>Supabase SQL Schemas</span>
              </button>

              <button
                onClick={() => setActiveTab('resend')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'resend'
                    ? 'bg-rose-950 text-rose-300 border border-rose-800'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Resend Email Hook</span>
              </button>

              <button
                onClick={() => setActiveTab('records')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'records'
                    ? 'bg-slate-800 text-white border border-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Live Session Submissions</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-700 text-slate-200">
                  {stored.rsvps.length + stored.volunteers.length + stored.inquiries.length + stored.donations.length}
                </span>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto py-4 text-xs font-mono leading-relaxed">
              
              {/* TAB 1: SUPABASE SQL */}
              {activeTab === 'supabase' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>Copy and run this inside your Supabase Dashboard SQL Editor:</span>
                    <button
                      onClick={() => handleCopy(guide.supabaseSql, 'supabase')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-sans text-xs transition-colors cursor-pointer"
                    >
                      {copied === 'supabase' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied === 'supabase' ? 'Copied SQL!' : 'Copy SQL Script'}</span>
                    </button>
                  </div>

                  <pre className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-300 overflow-x-auto text-[11px] leading-relaxed">
                    {guide.supabaseSql}
                  </pre>
                </div>
              )}

              {/* TAB 2: RESEND EMAIL */}
              {activeTab === 'resend' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>Deploy as a Netlify Serverless Function or Supabase Edge Function:</span>
                    <button
                      onClick={() => handleCopy(guide.resendTemplate, 'resend')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-sans text-xs transition-colors cursor-pointer"
                    >
                      {copied === 'resend' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied === 'resend' ? 'Copied Code!' : 'Copy Resend Hook'}</span>
                    </button>
                  </div>

                  <pre className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-rose-300 overflow-x-auto text-[11px] leading-relaxed">
                    {guide.resendTemplate}
                  </pre>
                </div>
              )}

              {/* TAB 3: LIVE LOCAL SUBMISSIONS */}
              {activeTab === 'records' && (
                <div className="space-y-4 font-sans">
                  <p className="text-slate-400 text-xs">
                    Every form submitted on this page is safely stored in local state so you can test end-to-end interactions before deploying your backend:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Volunteers */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white text-xs">Volunteers ({stored.volunteers.length})</span>
                      </div>
                      {stored.volunteers.length === 0 ? (
                        <p className="text-slate-500 text-xs">No volunteer signups yet.</p>
                      ) : (
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {stored.volunteers.map((v: any) => (
                            <div key={v.id} className="text-xs p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                              <span className="font-bold text-white">{v.name}</span> ({v.city})
                              <div className="text-[10px] text-slate-400">{v.email} · {v.phone}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Event RSVPs */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white text-xs">Event RSVPs ({stored.rsvps.length})</span>
                      </div>
                      {stored.rsvps.length === 0 ? (
                        <p className="text-slate-500 text-xs">No workshop RSVPs yet.</p>
                      ) : (
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {stored.rsvps.map((r: any) => (
                            <div key={r.id} className="text-xs p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                              <span className="font-bold text-white">{r.name}</span> — {r.eventTitle}
                              <div className="text-[10px] text-slate-400">{r.email} ({r.attendeesCount} attendees)</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Inquiries */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white text-xs">Assistance Inquiries ({stored.inquiries.length})</span>
                      </div>
                      {stored.inquiries.length === 0 ? (
                        <p className="text-slate-500 text-xs">No inquiries logged yet.</p>
                      ) : (
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {stored.inquiries.map((i: any) => (
                            <div key={i.id} className="text-xs p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                              <span className="font-bold text-white">{i.name}</span> — {i.assistanceType}
                              <div className="text-[10px] text-slate-400">{i.phone} · {i.city}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Donations */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white text-xs">Donation Attempts ({stored.donations.length})</span>
                      </div>
                      {stored.donations.length === 0 ? (
                        <p className="text-slate-500 text-xs">No donations recorded yet.</p>
                      ) : (
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {stored.donations.map((d: any) => (
                            <div key={d.id} className="text-xs p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                              <span className="font-bold text-white">{d.type === 'in-kind' ? 'In-Kind Pledge' : `$${d.amount} (${d.frequency})`}</span>
                              <div className="text-[10px] text-slate-400">{d.program}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Footer Note */}
            <div className="pt-3 border-t border-slate-800 text-slate-400 text-xs flex items-center justify-between">
              <span>Pathways Assistance Center · Developer Architecture</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 text-white font-sans text-xs hover:bg-slate-700"
              >
                Close Drawer
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
