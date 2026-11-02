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

export type EventCategory =
  | 'Youth Empowerment'
  | 'Food Assistance'
  | 'Community Workshop'
  | 'Volunteer & Community';

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

export interface DonationTier {
  amount: number;
  label: string;
  impact: string;
  popular?: boolean;
}
