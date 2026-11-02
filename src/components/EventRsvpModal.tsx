import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Download, Users, AlertCircle } from 'lucide-react';
import { CommunityEvent } from '../types';
import { apiService } from '../services/apiService';

interface EventRsvpModalProps {
  event: CommunityEvent | null;
  isOpen: boolean;
  onClose: () => void;
  onRsvpSuccess?: () => void;
}

export const EventRsvpModal: React.FC<EventRsvpModalProps> = ({ event, isOpen, onClose, onRsvpSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendeesCount: 1,
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrorMessage(null);
    }
  }, [isOpen, event]);

  if (!isOpen || !event) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please complete your full name, email, and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await apiService.submitEventRsvp({
        eventId: event.id,
        eventTitle: event.title,
        eventDate: event.date,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        attendeesCount: formData.attendeesCount,
        notes: formData.notes
      });

      setSubmitted(true);
      if (onRsvpSuccess) onRsvpSuccess();
    } catch {
      setErrorMessage('There was an error registering your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              Registration Confirmed!
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-sm mx-auto">
              We look forward to seeing you at <strong>{event.title}</strong>. A confirmation reminder will be sent to <strong>{formData.email}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left mb-6 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <Calendar className="w-4 h-4 text-rose-600" />
                <span>{new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{event.locationName} ({event.address})</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => apiService.generateIcsFile(event)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Add to Calendar (.ics)</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-6 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-rose-50 text-rose-700 border border-rose-100 inline-block mb-2">
                {event.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                RSVP for {event.title}
              </h3>
            </div>

            {/* Event Summary Pill */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-medium text-slate-900">
                <Calendar className="w-4 h-4 text-rose-600" />
                <span>{new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })} · {event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{event.locationName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400" />
                <span>{event.capacity - event.registeredCount} spots remaining</span>
              </div>
            </div>

            {errorMessage && (
              <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-rose-50 text-rose-700 text-xs border border-rose-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(972) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Number of Attendees
                  </label>
                  <select
                    value={formData.attendeesCount}
                    onChange={(e) => setFormData({ ...formData, attendeesCount: parseInt(e.target.value, 10) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Audience Group
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={event.audience}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-xs text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Special Notes / Accessibility Requests
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Bringing two high-schoolers, wheelchair ramp access needed"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-[#E11D48] hover:bg-[#BE123C] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
                >
                  {isSubmitting ? 'Confirming RSVP...' : 'Confirm Registration'}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
