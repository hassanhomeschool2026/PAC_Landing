export interface ServicePillar {
  id: string;
  pillarNumber: string;
  title: string;
  shortTitle: string;
  focus: string;
  details: string;
  highlights: string[];
  impactStat: string;
  impactLabel: string;
  badge: string;
}

export interface PartnerResource {
  id: string;
  name: string;
  shortName: string;
  services: string;
  phone: string;
  website: string;
  websiteDisplay: string;
  bestFor: string;
}

export type EventCategory = 'Youth Empowerment' | 'Food Assistance' | 'Community Workshop' | 'Volunteer & Community';

export interface CommunityEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string; // YYYY-MM-DD
  time: string;
  locationName: string;
  address: string;
  description: string;
  capacity: number;
  registeredCount: number;
  audience: string;
  featured?: boolean;
}

export interface EventRsvpPayload {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  name: string;
  email: string;
  phone: string;
  attendeesCount: number;
  notes?: string;
  createdAt: string;
}

export interface VolunteerApplicationPayload {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  interests: string[];
  availability: string;
  message?: string;
  createdAt: string;
}

export interface AssistanceInquiryPayload {
  id: string;
  name: string;
  city: string;
  phone: string;
  email: string;
  assistanceType: 'Rental / Mortgage' | 'Electric / Water / Gas Utilities' | 'Food Assistance' | 'Youth Programs' | 'Other Emergency Need';
  message: string;
  createdAt: string;
}

export interface DonationRecord {
  id: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  program: string;
  donorName?: string;
  donorEmail?: string;
  type: 'stripe' | 'in-kind';
  inKindCategories?: string[];
  inKindDescription?: string;
  createdAt: string;
}

export interface BackendIntegrationGuide {
  supabaseSql: string;
  resendTemplate: string;
  netlifySnippet: string;
}
