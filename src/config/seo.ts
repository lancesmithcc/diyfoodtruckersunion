import { SEOConfig, PageSEOData, AuthorData } from '../types/seo';

// Default SEO Configuration
export const DEFAULT_SEO: SEOConfig = {
  title: 'DIY Food Truckers Union - Start Smart, Not Expensive',
  description: 'Learn how to start and run a successful food truck business with our comprehensive guides, tools, and community support. Start smart, not expensive.',
  keywords: [
    'food truck business',
    'food truck startup',
    'mobile food business',
    'food truck guide',
    'food truck entrepreneur',
    'food truck operations',
    'food truck marketing',
    'food truck financing'
  ],
  openGraph: {
    type: 'website',
    siteName: 'DIY Food Truckers Union',
    locale: 'en_US'
  },
  twitterCard: {
    card: 'summary_large_image',
    site: '@diyfoodtruckers'
  }
};

// Site-wide SEO Configuration
export const SITE_CONFIG = {
  name: 'DIY Food Truckers Union',
  url: process.env.NODE_ENV === 'production' 
    ? 'https://diyfoodtruckersunion.com' 
    : 'http://localhost:5173',
  description: 'The ultimate resource for aspiring food truck entrepreneurs',
  author: 'DIY Food Truckers Union',
  social: {
    twitter: '@diyfoodtruckers',
    facebook: 'diyfoodtruckersunion'
  },
  logo: '/img/logo.svg'
};

// Default Author Information
export const DEFAULT_AUTHOR: AuthorData = {
  name: 'DIY Food Truckers Union',
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/img/logo.svg`,
  description: 'Expert guidance for food truck entrepreneurs'
};

// SEO Templates for Different Page Types
export const SEO_TEMPLATES = {
  lesson: {
    titleSuffix: ' - Food Truck Lesson | DIY Food Truckers Union',
    descriptionTemplate: 'Learn about {topic} for your food truck business. {description}',
    keywords: ['food truck lesson', 'food truck education', 'food truck training']
  },
  guide: {
    titleSuffix: ' - Complete Guide | DIY Food Truckers Union',
    descriptionTemplate: 'Complete guide to {topic} for food truck entrepreneurs. {description}',
    keywords: ['food truck guide', 'food truck how-to', 'food truck tutorial']
  },
  resource: {
    titleSuffix: ' - Resources | DIY Food Truckers Union',
    descriptionTemplate: 'Essential {topic} resources for food truck business owners. {description}',
    keywords: ['food truck resources', 'food truck tools', 'food truck templates']
  },
  landing: {
    titleSuffix: ' | DIY Food Truckers Union',
    descriptionTemplate: '{description}',
    keywords: ['food truck business', 'food truck startup']
  }
};

// Category-specific SEO Data
export const CATEGORY_SEO = {
  'getting-started': {
    title: 'Getting Started with Your Food Truck Business',
    description: 'Essential first steps for launching your food truck venture',
    keywords: ['food truck startup', 'starting food truck business', 'food truck planning']
  },
  'operations': {
    title: 'Food Truck Operations & Management',
    description: 'Daily operations, staff management, and operational efficiency for food trucks',
    keywords: ['food truck operations', 'food truck management', 'food truck efficiency']
  },
  'financial': {
    title: 'Food Truck Financial Management',
    description: 'Budgeting, accounting, and financial planning for food truck businesses',
    keywords: ['food truck finances', 'food truck budgeting', 'food truck accounting']
  },
  'marketing': {
    title: 'Food Truck Marketing & Growth',
    description: 'Marketing strategies, customer acquisition, and business growth for food trucks',
    keywords: ['food truck marketing', 'food truck promotion', 'food truck growth']
  },
  'resources': {
    title: 'Food Truck Resources & Tools',
    description: 'Essential tools, templates, and resources for food truck entrepreneurs',
    keywords: ['food truck resources', 'food truck tools', 'food truck templates']
  },
  'community': {
    title: 'Food Truck Community & Support',
    description: 'Connect with other food truck entrepreneurs and get community support',
    keywords: ['food truck community', 'food truck network', 'food truck support']
  }
};

// Generate canonical URL
export const generateCanonicalUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
};

// Generate page title with template
export const generatePageTitle = (
  title: string, 
  pageType: keyof typeof SEO_TEMPLATES = 'landing'
): string => {
  return `${title}${SEO_TEMPLATES[pageType].titleSuffix}`;
};

// Generate meta description with template
export const generateMetaDescription = (
  description: string,
  topic: string,
  pageType: keyof typeof SEO_TEMPLATES = 'landing'
): string => {
  const template = SEO_TEMPLATES[pageType].descriptionTemplate;
  return template
    .replace('{topic}', topic)
    .replace('{description}', description);
};