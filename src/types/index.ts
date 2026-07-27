export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Licensing' | 'Operations' | 'Reporting' | 'Export & Trade';
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  estimatedTime: string;
  authority: string;
  legalBasis: string[];
  keyBenefits: string[];
  requirements: {
    administrative: string[];
    technical: string[];
    environmental: string[];
    financial: string[];
  };
  workflowSteps: {
    step: number;
    title: string;
    description: string;
    duration: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  whatsAppMessage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Licensing' | 'RKAB' | 'Export' | 'Compliance';
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  sector: string;
  quote: string;
  rating: number;
  licenseAcquired: string;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
}

export interface WhyUsPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  address: {
    street: string;
    building: string;
    district: string;
    city: string;
    province: string;
    postalCode: string;
    fullAddress: string;
    mapCoordinates: {
      lat: number;
      lng: number;
    };
    googleMapsEmbedUrl: string;
  };
  phone: string;
  whatsAppNumber: string; // E.164 format without + e.g. 6282132588882
  email: string;
  workingHours: string;
  socials: {
    linkedin: string;
    instagram: string;
    youtube: string;
  };
}
