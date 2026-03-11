export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface CTAContent {
  headline: string;
  subtext: string;
  buttonText: string;
}

export interface FooterContent {
  studioName: string;
  tagline: string;
  email: string;
  instagram: string;
  twitter: string;
}

export interface SiteContent {
  hero: HeroContent;
  features: Feature[];
  works: WorkItem[];
  process: ProcessStep[];
  cta: CTAContent;
  footer: FooterContent;
}
