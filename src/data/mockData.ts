import { ServicePillar, PartnerResource, CommunityEvent } from '../types';

export const SERVICE_CITIES = [
  'Wylie',
  'Murphy',
  'Lavon',
  'Rockwall',
  'Rowlett (75089)',
  'Sachse'
];

export const LINKS = {
  // Exact Stripe donation link specified by user
  STRIPE_DONATION_URL: 'https://donate.stripe.com/fZudRb5J4dDsew934AgnK00',
  
  // Google Forms for volunteer registration & inquiries
  GOOGLE_FORM_VOLUNTEER: 'https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_VOLUNTEER_FORM_KEY/viewform',
  GOOGLE_FORM_INQUIRY: 'https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_INQUIRY_FORM_KEY/viewform',

  // Contact details exactly as specified
  ADDRESS_LINE1: '5900 Balcones Drive, Suite 165',
  ADDRESS_CITY_STATE_ZIP: 'Austin, Texas 78731',
  EMAIL_INFO: 'info@pathwaysac.org',
  EMAIL_DONATE: 'donate@pathwaysac.org',
  PHONE_DISPLAY: '972.581.9322',
  PHONE_NUMERIC: '9725819322',
  FAX_DISPLAY: '972.551.4442'
};

// Exactly the 3 active pillars specified (no discontinued clothing, no pause disclaimers)
export const WAYS_WE_HELP: ServicePillar[] = [
  {
    id: 'short-term-financial-assistance',
    pillarNumber: '1',
    title: 'Short Term Financial Assistance',
    shortTitle: 'Financial Assistance',
    focus: 'Direct-to-vendor micro-relief for essential housing (rent/mortgage) and utility services (electricity, water, gas) to prevent disconnections and evictions for households with children.',
    details: 'When sudden disruptions or emergency expenses occur, our micro-relief grants intervene before families face eviction or utility shut-offs. Payments are made directly to verified housing providers and utility companies to ensure absolute accountability and immediate shelter security.',
    highlights: [
      'Direct-to-vendor rent and mortgage relief',
      'Electric, gas, and municipal water utility protection',
      'Intervention designed to keep children safe in their homes',
      'Confidential review conducted with honor and respect'
    ],
    impactStat: '100%',
    impactLabel: 'Direct-to-vendor verification',
    badge: 'Housing & Utilities'
  },
  {
    id: 'food-assistance',
    pillarNumber: '2',
    title: 'Food Assistance',
    shortTitle: 'Food Assistance',
    focus: 'Emergency grocery support to provide access to fresh food and essential nutrition during unexpected hardship or sudden transitions.',
    details: 'No family or child should ever wonder where their next nutritious meal is coming from. Our Food Assistance Bridge delivers wholesome groceries, pantry essentials, and fresh produce so families remain healthy and nourished during vulnerable times.',
    highlights: [
      'Emergency grocery assistance for local households',
      'Nutrient-dense shelf staples, grains, and proteins',
      'Focused nourishment for families with growing school-age children',
      'Accessible distribution coordination across Eastern Collin & Dallas counties'
    ],
    impactStat: 'Active',
    impactLabel: 'Emergency nutrition support',
    badge: 'Nutrition Support'
  },
  {
    id: 'youth-programs',
    pillarNumber: '3',
    title: 'Youth Programs (Ages 8-17)',
    shortTitle: 'Youth Programs',
    focus: 'Age-appropriate, education-packed programs and community workshops for youth ages 8–17, fostering leadership, life skills, and educational confidence.',
    details: 'Breaking generational poverty begins by investing in young people. Our workshops teach practical financial literacy, communication skills, and personal goal-setting to nurture confident, resilient youth prepared for lifelong success.',
    highlights: [
      'Interactive financial literacy and budgeting workshops',
      'Public speaking and leadership confidence labs',
      'Academic coaching and career readiness exploration',
      'Positive mentorship in a supportive peer environment'
    ],
    impactStat: 'Ages 8–17',
    impactLabel: 'Youth leadership & literacy',
    badge: 'Next Generation'
  }
];

export const SAFETY_NET_PARTNERS: PartnerResource[] = [
  {
    id: 'accc',
    name: 'Assistance Center of Collin County (ACCC)',
    shortName: 'ACCC',
    services: 'Emergency rent, mortgage, and utility support for families in acute crisis.',
    phone: '(972) 422-1850',
    website: 'https://assistancecenter.org',
    websiteDisplay: 'assistancecenter.org',
    bestFor: 'Emergency Rent & Utility Relief'
  },
  {
    id: 'aco',
    name: 'All Community Outreach (ACO)',
    shortName: 'ACO',
    services: 'Comprehensive emergency family aid, community food pantry, and stabilization.',
    phone: '(972) 727-9131',
    website: 'https://acocares.org',
    websiteDisplay: 'acocares.org',
    bestFor: 'Comprehensive Family Aid & Pantry'
  },
  {
    id: 'texas-211',
    name: 'Texas 2-1-1 Health & Human Services',
    shortName: 'Texas 2-1-1',
    services: 'Statewide 24/7 directory connecting Texans to local housing, food, and family resources.',
    phone: 'Dial 2-1-1 or (877) 541-7905',
    website: 'https://211texas.org',
    websiteDisplay: '211texas.org',
    bestFor: '24/7 Statewide Referral Directory'
  }
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 'evt-01',
    title: 'Youth Leadership & Financial Literacy Lab',
    category: 'Youth Empowerment',
    date: '2026-11-07',
    time: '10:00 AM – 12:30 PM CST',
    locationName: 'East Collin Community Suite',
    address: 'Wylie, TX 75098',
    description: 'An interactive hands-on workshop for youth ages 12–17 covering personal budgeting, savings goals, bank basics, and public speaking exercises.',
    capacity: 25,
    registeredCount: 18,
    audience: 'Youth Ages 12–17 & Parents',
    featured: true
  },
  {
    id: 'evt-02',
    title: 'Emergency Food Bridge Morning Distribution',
    category: 'Food Assistance',
    date: '2026-11-10',
    time: '9:00 AM – 1:00 PM CST',
    locationName: 'Community Outreach Hub',
    address: 'Lavon, TX 75166',
    description: 'Weekly distribution of wholesome grocery boxes, shelf-stable proteins, fresh vegetables, and household essentials for local families in our service territory.',
    capacity: 60,
    registeredCount: 42,
    audience: 'Families with Children & Individuals in Need',
    featured: true
  },
  {
    id: 'evt-03',
    title: 'Family Utility & Housing Resource Clinic',
    category: 'Community Workshop',
    date: '2026-11-14',
    time: '1:00 PM – 3:30 PM CST',
    locationName: 'Murphy Community Meeting Hall',
    address: 'Murphy, TX 75094',
    description: 'One-on-one document navigation for families needing help applying for direct-to-vendor emergency utility assistance and budgeting help.',
    capacity: 30,
    registeredCount: 19,
    audience: 'Collin & Dallas County Residents',
    featured: false
  },
  {
    id: 'evt-04',
    title: 'Community Volunteer Orientation & Outreach Drive',
    category: 'Volunteer & Community',
    date: '2026-11-18',
    time: '6:00 PM – 7:30 PM CST',
    locationName: 'Rockwall Public Library Room',
    address: 'Rockwall, TX 75087',
    description: 'Learn how to mentor in youth workshops, assist with grocery distribution packing, and support neighborhood outreach.',
    capacity: 35,
    registeredCount: 22,
    audience: 'Prospective & Current Volunteers',
    featured: true
  }
];

export function downloadEventIcs(event: CommunityEvent): void {
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
