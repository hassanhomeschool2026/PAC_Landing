import {
  AssistanceInquiryPayload,
  CommunityEvent,
  EventRsvpPayload,
  InKindPledgePayload,
  MonetaryDonationIntent,
  OutgoingSubmissionLog,
  PacBackendConfig,
  ServiceCity,
  VolunteerSignupPayload,
} from '../types/pac';

const STORAGE_KEYS = {
  CONFIG: 'pac_backend_config_v1',
  EVENTS: 'pac_community_events_v1',
  RSVPS: 'pac_event_rsvps_v1',
  VOLUNTEERS: 'pac_volunteer_signups_v1',
  INQUIRIES: 'pac_assistance_inquiries_v1',
  INKIND: 'pac_inkind_pledges_v1',
  LOGS: 'pac_submission_logs_v1',
};

export const SERVICE_CITIES: ServiceCity[] = [
  'Wylie',
  'Murphy',
  'Lavon',
  'Rockwall',
  'Rowlett (75089)',
  'Sachse',
  'Other Collin/Dallas County',
];

export const INITIAL_COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 'evt-food-bridge-nov-04',
    title: 'Emergency Food Assistance Bridge Distribution',
    category: 'food-bridge',
    categoryLabel: 'Food Assistance Bridge',
    date: '2026-11-04',
    startTime: '9:00 AM',
    endTime: '1:00 PM',
    city: 'Lavon',
    location: 'Lavon Community Distribution Hub · Lavon, TX 75166',
    summary:
      'Fresh produce, shelf-stable groceries, and family nutrition boxes for households experiencing unexpected hardship across Eastern Collin & Dallas Counties.',
    capacity: 65,
    registeredCount: 48,
    hostNote: 'Pre-registration helps our team prepare family-sized fresh grocery bundles with dignity and zero wait.',
  },
  {
    id: 'evt-youth-speak-nov-07',
    title: 'Youth Empowerment Workshop: Public Speaking & Confidence Lab',
    category: 'youth-empowerment',
    categoryLabel: 'Youth Empowerment (Ages 8–17)',
    date: '2026-11-07',
    startTime: '10:00 AM',
    endTime: '12:30 PM',
    city: 'Wylie',
    location: 'Wylie Civic & Education Center · Wylie, TX 75098',
    summary:
      'Interactive Saturday workshop for youth ages 8–17 focused on communication skills, leadership confidence, and structured peer mentorship.',
    ageGroup: 'Ages 8–17',
    capacity: 35,
    registeredCount: 24,
    hostNote: 'Workbooks and healthy snacks provided at no cost to participating families.',
  },
  {
    id: 'evt-food-bridge-nov-11',
    title: 'Mid-Month Family Grocery & Nutrition Bridge',
    category: 'food-bridge',
    categoryLabel: 'Food Assistance Bridge',
    date: '2026-11-11',
    startTime: '9:00 AM',
    endTime: '1:00 PM',
    city: 'Rockwall',
    location: 'Regional Partner Pickup Point · Rockwall, TX 75087',
    summary:
      'Curbside and walk-up grocery assistance featuring fresh proteins, dairy, produce, and essential household staples for local families.',
    capacity: 70,
    registeredCount: 41,
    hostNote: 'Confidential check-in by family last name.',
  },
  {
    id: 'evt-fin-stability-nov-14',
    title: 'Family Financial Wellness & Utility Protection Clinic',
    category: 'financial-workshop',
    categoryLabel: 'Emergency Financial Assistance',
    date: '2026-11-14',
    startTime: '11:00 AM',
    endTime: '1:00 PM',
    city: 'Rowlett (75089)',
    location: 'Rowlett Community Resource Room · Rowlett, TX 75089',
    summary:
      'Practical guidance on navigating utility payment plans, preventing service disconnections, budgeting for seasonal transitions, and direct-to-vendor relief intake.',
    capacity: 40,
    registeredCount: 29,
    hostNote: 'One-on-one confidential resource navigation available after the session.',
  },
  {
    id: 'evt-youth-finance-nov-21',
    title: 'Youth Financial Literacy & Goal-Setting Workshop',
    category: 'youth-empowerment',
    categoryLabel: 'Youth Empowerment (Ages 8–17)',
    date: '2026-11-21',
    startTime: '10:00 AM',
    endTime: '12:30 PM',
    city: 'Murphy',
    location: 'Murphy Activity Center Classroom B · Murphy, TX 75094',
    summary:
      'Age-tailored hands-on sessions teaching smart saving habits, entrepreneurship basics, and long-term educational planning for ages 8–12 and 13–17.',
    ageGroup: 'Ages 8–17 (Split Tracks)',
    capacity: 40,
    registeredCount: 31,
    hostNote: 'Each student receives a PAC Financial Explorer starter kit.',
  },
  {
    id: 'evt-thanksgiving-bridge-nov-24',
    title: 'Thanksgiving Week Family Food & Care Distribution',
    category: 'food-bridge',
    categoryLabel: 'Food Assistance Bridge',
    date: '2026-11-24',
    startTime: '9:00 AM',
    endTime: '1:30 PM',
    city: 'Lavon',
    location: 'Lavon Community Distribution Hub · Lavon, TX 75166',
    summary:
      'Holiday meal staples, fresh produce, and essential personal care items for families across Wylie, Murphy, Lavon, Rockwall, Rowlett, and Sachse.',
    capacity: 100,
    registeredCount: 78,
    hostNote: 'Volunteers and families welcome; reserve your pickup window below.',
  },
  {
    id: 'evt-volunteer-orientation-nov-28',
    title: 'Winter Volunteer & Youth Mentor Orientation',
    category: 'volunteer-outreach',
    categoryLabel: 'Volunteer & Outreach',
    date: '2026-11-28',
    startTime: '9:30 AM',
    endTime: '11:00 AM',
    city: 'Sachse',
    location: 'Sachse Neighborhood Commons · Sachse, TX 75048',
    summary:
      'Onboarding session for new volunteers interested in Youth Mentoring (Ages 8–17), Event Support & Distribution, and Community Outreach.',
    capacity: 30,
    registeredCount: 18,
    hostNote: 'Learn about our dignity-first service model and upcoming winter schedule.',
  },
  {
    id: 'evt-youth-stem-dec-05',
    title: 'Youth Leadership & Community Impact Showcase',
    category: 'youth-empowerment',
    categoryLabel: 'Youth Empowerment (Ages 8–17)',
    date: '2026-12-05',
    startTime: '10:30 AM',
    endTime: '1:00 PM',
    city: 'Wylie',
    location: 'Wylie Civic & Education Center · Wylie, TX 75098',
    summary:
      'Year-end workshop where youth ages 8–17 design neighborhood service projects, practice team leadership, and celebrate educational milestones.',
    ageGroup: 'Ages 8–17',
    capacity: 45,
    registeredCount: 22,
    hostNote: 'Parents and guardians invited for the final 30-minute showcase.',
  },
  {
    id: 'evt-food-bridge-dec-09',
    title: 'December Food Assistance Bridge & Winter Essentials',
    category: 'food-bridge',
    categoryLabel: 'Food Assistance Bridge',
    date: '2026-12-09',
    startTime: '9:00 AM',
    endTime: '1:00 PM',
    city: 'Lavon',
    location: 'Lavon Community Distribution Hub · Lavon, TX 75166',
    summary:
      'Fresh grocery distribution paired with new children’s winter clothing/shoes and unopened personal care items for registered households.',
    capacity: 80,
    registeredCount: 39,
    hostNote: 'Reserve early and note children’s clothing/shoe sizes in the RSVP notes if needed.',
  },
];

const DEFAULT_CONFIG: PacBackendConfig = {
  stripePaymentLink: import.meta.env.VITE_STRIPE_PAYMENT_LINK || '',
  recipientEmail: 'info@pathwaysac.org',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  resendWebhookUrl: import.meta.env.VITE_FORM_ENDPOINT || '',
  enableNetlifyForms: true,
};

function encodeNetlifyForm(data: Record<string, string | number | boolean>): string {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(String(data[key])))
    .join('&');
}

export class PacService {
  static getConfig(): PacBackendConfig {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONFIG);
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback to default config
    }
    return DEFAULT_CONFIG;
  }

  static saveConfig(next: Partial<PacBackendConfig>): PacBackendConfig {
    const merged = { ...this.getConfig(), ...next };
    try {
      localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(merged));
    } catch {
      // Ignore storage errors
    }
    return merged;
  }

  static getEvents(): CommunityEvent[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
      if (saved) {
        return JSON.parse(saved);
      }
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(INITIAL_COMMUNITY_EVENTS));
    } catch {
      // Fallback
    }
    return INITIAL_COMMUNITY_EVENTS;
  }

  static getLogs(): OutgoingSubmissionLog[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LOGS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  private static appendLog(log: Omit<OutgoingSubmissionLog, 'id' | 'timestamp'>): OutgoingSubmissionLog {
    const entry: OutgoingSubmissionLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      timestamp: new Date().toISOString(),
      ...log,
    };
    try {
      const existing = this.getLogs();
      localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify([entry, ...existing].slice(0, 30)));
    } catch {
      // Ignore
    }
    return entry;
  }

  /**
   * Attempts non-blocking submission to Netlify Forms when hosted on Netlify,
   * plus logs the structured Supabase + Resend payload for backend inspection.
   */
  private static async tryNetlifyFormPost(formName: string, fields: Record<string, string | number | boolean>) {
    const config = this.getConfig();
    if (!config.enableNetlifyForms) return;
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeNetlifyForm({ 'form-name': formName, ...fields }),
      });
    } catch {
      // Expected in preview environments not backed by Netlify edge
    }
  }

  static async submitAssistanceInquiry(
    input: Omit<AssistanceInquiryPayload, 'id' | 'createdAt'>
  ): Promise<AssistanceInquiryPayload> {
    const record: AssistanceInquiryPayload = {
      ...input,
      id: `inq_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify([record, ...existing]));
    } catch {
      // Ignore storage error
    }

    await this.tryNetlifyFormPost('pac-assistance-inquiry', {
      name: record.name,
      city: record.city,
      contactInfo: record.contactInfo,
      assistanceType: record.pillar,
      briefRequest: record.briefRequest,
    });

    this.appendLog({
      channel: 'Supabase + Resend',
      tableOrForm: 'assistance_inquiries -> info@pathwaysac.org',
      recipientEmail: 'info@pathwaysac.org',
      payload: {
        supabaseTable: 'assistance_inquiries',
        row: record,
        resendEmail: {
          from: 'Pathways Assistance Center <notifications@pathwaysac.org>',
          to: ['info@pathwaysac.org'],
          subject: `[PAC Assistance Inquiry] ${record.pillar} — ${record.name} (${record.city})`,
          reply_to: record.contactInfo,
        },
      },
    });

    return record;
  }

  static async submitVolunteerSignup(
    input: Omit<VolunteerSignupPayload, 'id' | 'createdAt'>
  ): Promise<VolunteerSignupPayload> {
    const record: VolunteerSignupPayload = {
      ...input,
      id: `vol_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.VOLUNTEERS) || '[]');
      localStorage.setItem(STORAGE_KEYS.VOLUNTEERS, JSON.stringify([record, ...existing]));
    } catch {
      // Ignore storage error
    }

    await this.tryNetlifyFormPost('pac-volunteer-signup', {
      name: record.name,
      email: record.email,
      phone: record.phone,
      city: record.city,
      interests: record.interests.join(', '),
      skills: record.skills.join(', '),
      availability: record.availability.join(', '),
      message: record.message,
    });

    this.appendLog({
      channel: 'Supabase + Resend',
      tableOrForm: 'volunteer_registrations -> info@pathwaysac.org',
      recipientEmail: 'info@pathwaysac.org',
      payload: {
        supabaseTable: 'volunteer_registrations',
        row: record,
        resendEmail: {
          from: 'Pathways Assistance Center <volunteer@pathwaysac.org>',
          to: ['info@pathwaysac.org', record.email],
          subject: `[PAC Volunteer Sign-Up] ${record.name} (${record.city})`,
        },
      },
    });

    return record;
  }

  static async submitEventRsvp(
    input: Omit<EventRsvpPayload, 'id' | 'createdAt'>
  ): Promise<{ rsvp: EventRsvpPayload; updatedEvents: CommunityEvent[] }> {
    const rsvp: EventRsvpPayload = {
      ...input,
      id: `rsvp_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    const currentEvents = this.getEvents();
    const updatedEvents = currentEvents.map((evt) =>
      evt.id === input.eventId
        ? { ...evt, registeredCount: Math.min(evt.capacity, evt.registeredCount + input.attendees) }
        : evt
    );

    try {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(updatedEvents));
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.RSVPS) || '[]');
      localStorage.setItem(STORAGE_KEYS.RSVPS, JSON.stringify([rsvp, ...existing]));
    } catch {
      // Ignore storage error
    }

    await this.tryNetlifyFormPost('pac-event-rsvp', {
      eventId: rsvp.eventId,
      eventTitle: rsvp.eventTitle,
      name: rsvp.name,
      email: rsvp.email,
      phone: rsvp.phone,
      city: rsvp.city,
      attendees: rsvp.attendees,
      notes: rsvp.notes || '',
    });

    this.appendLog({
      channel: 'Supabase + Resend',
      tableOrForm: 'event_rsvps -> info@pathwaysac.org',
      recipientEmail: 'info@pathwaysac.org',
      payload: {
        supabaseTable: 'event_rsvps',
        row: rsvp,
        resendEmail: {
          from: 'Pathways Assistance Center <events@pathwaysac.org>',
          to: [rsvp.email, 'info@pathwaysac.org'],
          subject: `RSVP Confirmed: ${rsvp.eventTitle} (${rsvp.eventDate})`,
        },
      },
    });

    return { rsvp, updatedEvents };
  }

  static async submitInKindPledge(
    input: Omit<InKindPledgePayload, 'id' | 'createdAt'>
  ): Promise<InKindPledgePayload> {
    const pledge: InKindPledgePayload = {
      ...input,
      id: `inkind_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.INKIND) || '[]');
      localStorage.setItem(STORAGE_KEYS.INKIND, JSON.stringify([pledge, ...existing]));
    } catch {
      // Ignore
    }

    await this.tryNetlifyFormPost('pac-inkind-pledge', {
      name: pledge.name,
      email: pledge.email,
      phone: pledge.phone,
      city: pledge.city,
      categories: pledge.categories.join(', '),
      preferredWindow: pledge.preferredWindow,
      itemDetails: pledge.itemDetails,
    });

    this.appendLog({
      channel: 'Supabase + Resend',
      tableOrForm: 'in_kind_pledges -> donate@pathwaysac.org',
      recipientEmail: 'donate@pathwaysac.org',
      payload: {
        supabaseTable: 'in_kind_pledges',
        row: pledge,
        resendEmail: {
          from: 'Pathways Assistance Center <donate@pathwaysac.org>',
          to: ['donate@pathwaysac.org', 'info@pathwaysac.org', pledge.email],
          subject: `[PAC In-Kind Donation Pledge] ${pledge.name} (${pledge.city})`,
        },
      },
    });

    return pledge;
  }

  static recordStripeDonationIntent(
    input: Omit<MonetaryDonationIntent, 'id' | 'createdAt'>
  ): MonetaryDonationIntent {
    const intent: MonetaryDonationIntent = {
      ...input,
      id: `don_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    this.appendLog({
      channel: 'Stripe Redirect',
      tableOrForm: 'donation_intents (Stripe Payment Link)',
      recipientEmail: 'info@pathwaysac.org',
      payload: intent,
    });

    return intent;
  }

  static downloadEventIcs(event: CommunityEvent) {
    const cleanDate = event.date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Pathways Assistance Center//Community Calendar//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@pathwaysac.org`,
      `DTSTAMP:${cleanDate}T090000Z`,
      `DTSTART:${cleanDate}T150000Z`,
      `DTEND:${cleanDate}T180000Z`,
      `SUMMARY:${event.title} — Pathways Assistance Center`,
      `DESCRIPTION:${event.summary.replace(/\n/g, ' ')} (${event.startTime} - ${event.endTime})`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

export const SUPABASE_SQL_SCHEMA = `-- Pathways Assistance Center (pathwaysac.org) — Supabase PostgreSQL Schema
create extension if not exists "uuid-ossp";

-- 1. Assistance Inquiries (#resources -> info@pathwaysac.org)
create table if not exists public.assistance_inquiries (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  city text not null,
  contact_info text not null,
  pillar text not null,
  brief_request text not null,
  created_at timestamptz default now()
);

-- 2. Volunteer Registrations (#get-involved)
create table if not exists public.volunteer_registrations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text not null,
  city text not null,
  interests text[] not null default '{}',
  skills text[] not null default '{}',
  availability text[] not null default '{}',
  message text,
  created_at timestamptz default now()
);

-- 3. Community Events & Workshops Calendar (#events)
create table if not exists public.event_rsvps (
  id uuid primary key default uuid_generate_v4(),
  event_id text not null,
  event_title text not null,
  event_date date not null,
  name text not null,
  email text not null,
  phone text not null,
  city text not null,
  attendees int not null default 1,
  youth_ages text,
  notes text,
  created_at timestamptz default now()
);

-- 4. In-Kind Goods Pledges (#donate)
create table if not exists public.in_kind_pledges (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text not null,
  city text not null,
  categories text[] not null default '{}',
  preferred_window text not null,
  item_details text not null,
  created_at timestamptz default now()
);`;
