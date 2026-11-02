import { 
  CommunityEvent, 
  EventRsvpPayload, 
  VolunteerApplicationPayload, 
  AssistanceInquiryPayload, 
  DonationRecord,
  BackendIntegrationGuide 
} from '../types';
import { INITIAL_COMMUNITY_EVENTS } from '../data/mockData';

const STORAGE_KEYS = {
  EVENTS: 'pac_events',
  RSVPS: 'pac_event_rsvps',
  VOLUNTEERS: 'pac_volunteers',
  INQUIRIES: 'pac_inquiries',
  DONATIONS: 'pac_donations',
  CUSTOM_STRIPE_URL: 'pac_stripe_url'
};

class ApiService {
  // Retrieve events, falling back to initial mock data if not in storage
  getEvents(): CommunityEvent[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EVENTS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return INITIAL_COMMUNITY_EVENTS;
  }

  // RSVP to an event
  async submitEventRsvp(rsvp: Omit<EventRsvpPayload, 'id' | 'createdAt'>): Promise<EventRsvpPayload> {
    const newRecord: EventRsvpPayload = {
      ...rsvp,
      id: 'rsvp-' + Date.now(),
      createdAt: new Date().toISOString()
    };

    try {
      // Save to RSVP storage
      const existingRsvps: EventRsvpPayload[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.RSVPS) || '[]');
      existingRsvps.unshift(newRecord);
      localStorage.setItem(STORAGE_KEYS.RSVPS, JSON.stringify(existingRsvps));

      // Increment registered count on the event
      const events = this.getEvents();
      const updatedEvents = events.map(evt => {
        if (evt.id === rsvp.eventId) {
          return {
            ...evt,
            registeredCount: Math.min(evt.capacity, evt.registeredCount + rsvp.attendeesCount)
          };
        }
        return evt;
      });
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(updatedEvents));
    } catch (e) {
      console.warn('Local storage write skipped:', e);
    }

    return newRecord;
  }

  // Submit volunteer application
  async submitVolunteerApplication(app: Omit<VolunteerApplicationPayload, 'id' | 'createdAt'>): Promise<VolunteerApplicationPayload> {
    const newRecord: VolunteerApplicationPayload = {
      ...app,
      id: 'vol-' + Date.now(),
      createdAt: new Date().toISOString()
    };

    try {
      const existing: VolunteerApplicationPayload[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.VOLUNTEERS) || '[]');
      existing.unshift(newRecord);
      localStorage.setItem(STORAGE_KEYS.VOLUNTEERS, JSON.stringify(existing));
    } catch (e) {
      console.warn('Local storage write skipped:', e);
    }

    return newRecord;
  }

  // Submit assistance inquiry
  async submitAssistanceInquiry(inquiry: Omit<AssistanceInquiryPayload, 'id' | 'createdAt'>): Promise<AssistanceInquiryPayload> {
    const newRecord: AssistanceInquiryPayload = {
      ...inquiry,
      id: 'inq-' + Date.now(),
      createdAt: new Date().toISOString()
    };

    try {
      const existing: AssistanceInquiryPayload[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
      existing.unshift(newRecord);
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(existing));
    } catch (e) {
      console.warn('Local storage write skipped:', e);
    }

    return newRecord;
  }

  // Record a donation attempt or in-kind pledge
  async recordDonation(donation: Omit<DonationRecord, 'id' | 'createdAt'>): Promise<DonationRecord> {
    const newRecord: DonationRecord = {
      ...donation,
      id: 'don-' + Date.now(),
      createdAt: new Date().toISOString()
    };

    try {
      const existing: DonationRecord[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.DONATIONS) || '[]');
      existing.unshift(newRecord);
      localStorage.setItem(STORAGE_KEYS.DONATIONS, JSON.stringify(existing));
    } catch (e) {
      console.warn('Local storage write skipped:', e);
    }

    return newRecord;
  }

  // Stripe Payment Link configuration helper
  getStripeUrl(): string {
    try {
      const custom = localStorage.getItem(STORAGE_KEYS.CUSTOM_STRIPE_URL);
      if (custom && custom.trim()) {
        return custom.trim();
      }
    } catch {
      // fallback
    }
    // Default placeholder or official organization donation link pattern
    return 'https://buy.stripe.com/test_pathways_assistance_center';
  }

  setStripeUrl(url: string): void {
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_STRIPE_URL, url);
    } catch (e) {
      console.warn('Local storage write skipped:', e);
    }
  }

  // Helper to generate a downloadable .ics calendar file for an event
  generateIcsFile(event: CommunityEvent): void {
    const dateFormatted = event.date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Pathways Assistance Center//Community Events//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${event.id}@pathwaysac.org`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART;VALUE=DATE:${dateFormatted}`,
      `SUMMARY:${event.title} — Pathways Assistance Center`,
      `DESCRIPTION:${event.description.replace(/\n/g, ' ')}\\n\\nAudience: ${event.audience}`,
      `LOCATION:${event.locationName}, ${event.address}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}-pathways-event.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Get developer integration artifacts for Supabase and Resend
  getBackendIntegrationGuide(): BackendIntegrationGuide {
    return {
      supabaseSql: `-- Pathways Assistance Center (pathwaysac.org)
-- Run this in your Supabase SQL Editor to initialize all tables:

-- 1. Volunteer Applications Table
CREATE TABLE IF NOT EXISTS public.volunteers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  interests TEXT[] NOT NULL DEFAULT '{}',
  availability TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Community Events & RSVPs
CREATE TABLE IF NOT EXISTS public.community_events (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  location_name TEXT NOT NULL,
  address TEXT NOT NULL,
  description TEXT NOT NULL,
  capacity INT NOT NULL DEFAULT 30,
  registered_count INT NOT NULL DEFAULT 0,
  audience TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.event_rsvps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id TEXT REFERENCES public.community_events(id) ON DELETE CASCADE,
  event_title TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  attendees_count INT NOT NULL DEFAULT 1,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Assistance Inquiries
CREATE TABLE IF NOT EXISTS public.assistance_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  assistance_type TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending_review',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Donations & In-Kind Pledges
CREATE TABLE IF NOT EXISTS public.donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  amount NUMERIC(10, 2),
  frequency TEXT NOT NULL DEFAULT 'one-time',
  program TEXT NOT NULL,
  donor_name TEXT,
  donor_email TEXT,
  type TEXT NOT NULL DEFAULT 'stripe',
  in_kind_categories TEXT[],
  in_kind_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security (RLS) with public insert policies:
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assistance_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public submissions" ON public.volunteers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public RSVPs" ON public.event_rsvps FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public inquiries" ON public.assistance_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public donation logging" ON public.donations FOR INSERT WITH CHECK (true);`,

      resendTemplate: `// Resend Transactional Email Hook (for Netlify Function or Supabase Edge Function)
// Destination: info@pathwaysac.org / donate@pathwaysac.org
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVolunteerNotification(volunteer: any) {
  return await resend.emails.send({
    from: 'Pathways Web Portal <notifications@pathwaysac.org>',
    to: ['info@pathwaysac.org'],
    reply_to: volunteer.email,
    subject: \`New Volunteer Sign-Up: \${volunteer.name} (\${volunteer.city})\`,
    html: \`
      <h2>New Pathways Assistance Center Volunteer Application</h2>
      <p><strong>Name:</strong> \${volunteer.name}</p>
      <p><strong>Email:</strong> \${volunteer.email}</p>
      <p><strong>Phone:</strong> \${volunteer.phone}</p>
      <p><strong>City:</strong> \${volunteer.city}</p>
      <p><strong>Interests:</strong> \${volunteer.interests.join(', ')}</p>
      <p><strong>Availability:</strong> \${volunteer.availability}</p>
      <p><strong>Notes:</strong> \${volunteer.message || 'None'}</p>
    \`
  });
}`,

      netlifySnippet: `<!-- For pure static Netlify Forms without backend code: -->
<form name="assistance-inquiry" method="POST" data-netlify="true" hidden>
  <input type="text" name="name" />
  <input type="text" name="city" />
  <input type="email" name="email" />
  <input type="tel" name="phone" />
  <input type="text" name="assistanceType" />
  <textarea name="message"></textarea>
</form>`
    };
  }
}

export const apiService = new ApiService();
