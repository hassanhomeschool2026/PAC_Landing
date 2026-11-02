import { ServicePillar, PartnerResource, CommunityEvent } from '../types';

export const SERVICE_CITIES = [
  'Wylie',
  'Murphy',
  'Lavon',
  'Rockwall',
  'Rowlett (75089)',
  'Sachse'
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'financial-assistance',
    pillarNumber: '01',
    title: 'Emergency Financial Assistance',
    shortTitle: 'Financial Relief',
    focus: 'Direct-to-vendor micro-relief for essential housing (rent/mortgage) and utility services (electricity, water, gas) to prevent disconnections and evictions for households with children.',
    details: 'When sudden job disruptions, illness, or emergency expenses strike, our micro-relief grants intervene before families face eviction or utility shut-offs. Payments are made directly to verified housing providers and utility companies to ensure absolute accountability and immediate relief.',
    highlights: [
      'Direct-to-vendor rent & mortgage payments',
      'Electric, gas, and municipal water utility protection',
      'Immediate intervention preventing family displacement',
      'Confidential intake and individualized budgeting support'
    ],
    impactStat: '100%',
    impactLabel: 'Direct vendor payment verification to preserve shelter stability',
    badge: 'Housing & Utilities'
  },
  {
    id: 'food-assistance',
    pillarNumber: '02',
    title: 'Food Assistance Bridge',
    shortTitle: 'Food Bridge',
    focus: 'Emergency grocery support to provide access to fresh food and essential nutrition during unexpected hardship or sudden transitions.',
    details: 'No child or caregiver should ever wonder where their next nutritious meal is coming from. Our Food Assistance Bridge delivers wholesome groceries, pantry essentials, fresh produce, and emergency food packages so families remain nourished during vulnerable seasons.',
    highlights: [
      'Weekly emergency food box distributions',
      'Nutrient-dense shelf staples, grains, and proteins',
      'Special accommodation for families with growing school-age children',
      'Seamless coordination with local community pantries'
    ],
    impactStat: 'Weekly',
    impactLabel: 'Scheduled distribution mornings for local Collin & Dallas families',
    badge: 'Nutrition Support'
  },
  {
    id: 'youth-empowerment',
    pillarNumber: '03',
    title: 'Youth Empowerment Programs',
    shortTitle: 'Youth Programs',
    focus: 'Age-appropriate, education-packed programs and community workshops for youth ages 8–17, fostering leadership, life skills, and educational confidence.',
    details: 'Breaking generational poverty begins by investing in children. Our youth workshops combine practical financial wellness, public speaking, educational coaching, and teamwork to nurture confident, resilient young leaders prepared for future success.',
    highlights: [
      'Interactive financial literacy & savings workshops',
      'Public speaking, communication, and leadership clinics',
      'Academic mentorship and career exploration seminars',
      'Civic engagement and youth-led community projects'
    ],
    impactStat: 'Ages 8–17',
    impactLabel: 'Targeted enrichment curriculum fostering long-term resilience',
    badge: 'Next Generation'
  }
];

export const PARTNER_RESOURCES: PartnerResource[] = [
  {
    id: 'assistance-center-collin',
    name: 'Assistance Center of Collin County',
    shortName: 'Assistance Center',
    services: 'Emergency rent, mortgage, and utility support for Collin County families facing sudden financial crisis.',
    phone: '(972) 422-1850',
    website: 'https://assistancecenter.org',
    websiteDisplay: 'assistancecenter.org',
    bestFor: 'Acute rent and utility assistance'
  },
  {
    id: 'all-community-outreach',
    name: 'All Community Outreach (ACO)',
    shortName: 'ACO Cares',
    services: 'Comprehensive emergency family aid, community food pantry, employment coaching, and education services.',
    phone: '(972) 727-9131',
    website: 'https://acocares.org',
    websiteDisplay: 'acocares.org',
    bestFor: 'Pantry distribution & family stabilization'
  },
  {
    id: 'texas-211',
    name: 'Texas 2-1-1 Health & Human Services',
    shortName: 'Texas 2-1-1 Directory',
    services: 'Statewide 24/7 comprehensive directory connecting Texans to local housing, food, child care, and mental health aid.',
    phone: 'Dial 2-1-1 or (877) 541-7905',
    website: 'https://211texas.org',
    websiteDisplay: '211texas.org',
    bestFor: 'Immediate 24/7 statewide resource routing'
  }
];

export const INITIAL_COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 'evt-01',
    title: 'Youth Leadership & Financial Literacy Lab',
    category: 'Youth Empowerment',
    date: '2026-11-07',
    time: '10:00 AM – 12:30 PM CST',
    locationName: 'Community Education Suite',
    address: 'East Collin Community Center, Wylie, TX',
    description: 'An interactive hands-on workshop for youth ages 12–17 covering personal budgeting, smart saving habits, bank accounts, and building confidence through public speaking exercises.',
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
    locationName: 'Pathways Community Outreach Station',
    address: 'Lavon Community Hub, Lavon, TX',
    description: 'Weekly distribution of wholesome grocery boxes, shelf-stable proteins, fresh vegetables, and household essentials for registered local families in our service territory.',
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
    address: '205 North Murphy Rd, Murphy, TX',
    description: 'One-on-one document review and intake navigation for families needing help applying for direct-to-vendor emergency utility assistance, seasonal weatherization, and budgeting help.',
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
    locationName: 'Rockwall Public Library Meeting Room',
    address: '1215 E Yellow Jacket Ln, Rockwall, TX',
    description: 'Learn how to become a mentor for youth workshops, assist with Tuesday/Wednesday food distribution packing, and represent Pathways Assistance Center at neighborhood events.',
    capacity: 35,
    registeredCount: 22,
    audience: 'Prospective & Current Volunteers',
    featured: true
  },
  {
    id: 'evt-05',
    title: 'Youth Public Speaking & Career Exploration Seminar',
    category: 'Youth Empowerment',
    date: '2026-11-21',
    time: '10:30 AM – 1:00 PM CST',
    locationName: 'Sachse Community Center',
    address: '3815 Sachse Rd, Sachse, TX',
    description: 'Youth ages 13–18 practice interview prep, speech delivery, resume building, and connect with guest community leaders who share pathways into trades and higher education.',
    capacity: 25,
    registeredCount: 14,
    audience: 'Teens Ages 13–18',
    featured: false
  },
  {
    id: 'evt-06',
    title: 'Holiday Food Basket & Winter Essentials Packing',
    category: 'Volunteer & Community',
    date: '2026-11-24',
    time: '9:00 AM – 1:00 PM CST',
    locationName: 'Rowlett Community Center',
    address: '5300 Main St, Rowlett, TX 75089',
    description: 'Volunteer teams gather to prepare emergency holiday meal boxes, winter pantry staples, and children’s essentials for families facing financial hardship.',
    capacity: 40,
    registeredCount: 31,
    audience: 'Volunteers, Families, & Civic Groups',
    featured: true
  }
];

export const DONATION_TIERS = [
  {
    amount: 25,
    label: '$25',
    impact: 'Provides a fresh emergency grocery bridge box with proteins, produce, and staple pantry goods for a child for one week.'
  },
  {
    amount: 50,
    label: '$50',
    impact: 'Supplies curriculum workbooks, financial literacy tools, and hands-on learning kits for 2 youth workshop attendees.'
  },
  {
    amount: 100,
    label: '$100',
    popular: true,
    impact: 'Funds an emergency micro-grant toward critical residential electric, water, or gas utilities to prevent household disconnection.'
  },
  {
    amount: 250,
    label: '$250',
    impact: 'Provides comprehensive emergency housing relief preventing eviction and keeping a stable roof over a family with young children.'
  }
];

export const IN_KIND_CATEGORIES = [
  { id: 'children-clothing', label: "New Children's Clothing & Shoes (Ages 4–17)" },
  { id: 'toiletries', label: 'Unopened Personal Care Items & Toiletries' },
  { id: 'pantry-staples', label: 'Unexpired Non-Perishable Food & Canned Proteins' },
  { id: 'school-supplies', label: 'Educational Supplies & Workshop Notebooks' }
];
