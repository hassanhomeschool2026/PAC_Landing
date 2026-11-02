export type ServiceCity =
  | 'Wylie'
  | 'Murphy'
  | 'Lavon'
  | 'Rockwall'
  | 'Rowlett (75089)'
  | 'Sachse'
  | 'Other Collin/Dallas County';

export type EventCategory =
  | 'all'
  | 'youth-empowerment'
  | 'food-bridge'
  | 'financial-workshop'
  | 'volunteer-outreach';

export interface CommunityEvent {
  id: string;
  title: string;
  category: Exclude<EventCategory, 'all'>;
  categoryLabel: string;
  date: string; // YYYY-MM-DD
  startTime: string;
  endTime: string;
  city: string;
  location: string;
  summary: string;
  ageGroup?: string;
  capacity: number;
  registeredCount: number;
  hostNote: string;
}

export interface EventRsvpPayload {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  name: string;
  email: string;
  phone: string;
  city: ServiceCity;
  attendees: number;
  youthAges?: string;
  notes?: string;
  createdAt: string;
}

export type VolunteerInterest =
  | 'Youth Mentoring (Ages 8–17)'
  | 'Event Support & Distribution'
  | 'Community Outreach & Awareness';

export interface VolunteerSignupPayload {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: ServiceCity;
  interests: VolunteerInterest[];
  skills: string[];
  availability: string[];
  message: string;
  createdAt: string;
}

export interface AssistanceInquiryPayload {
  id: string;
  name: string;
  city: ServiceCity;
  contactInfo: string;
  pillar: 'Emergency Financial Assistance' | 'Food Assistance Bridge' | 'Youth Empowerment Programs' | 'General Inquiry';
  briefRequest: string;
  createdAt: string;
}

export interface MonetaryDonationIntent {
  id: string;
  frequency: 'one-time' | 'monthly';
  amount: number;
  designation:
    | 'Where Most Needed'
    | 'Emergency Financial Assistance'
    | 'Food Assistance Bridge'
    | 'Youth Empowerment Programs';
  donorName?: string;
  donorEmail?: string;
  createdAt: string;
}

export interface InKindPledgePayload {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: ServiceCity;
  categories: string[];
  preferredWindow: string;
  itemDetails: string;
  createdAt: string;
}

export interface PacBackendConfig {
  stripePaymentLink: string;
  recipientEmail: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
  resendWebhookUrl: string;
  enableNetlifyForms: boolean;
}

export interface OutgoingSubmissionLog {
  id: string;
  timestamp: string;
  channel: 'Supabase + Resend' | 'Netlify Forms' | 'Stripe Redirect';
  tableOrForm: string;
  recipientEmail: string;
  payload: unknown;
}
