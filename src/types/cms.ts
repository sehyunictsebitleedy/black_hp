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

export interface Product {
  id: string;
  title: string;
  version: string;
  category: string;
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

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
}

export interface SiteContent {
  hero: HeroContent;
  features: Feature[];
  products: Product[];
  process: ProcessStep[];
  projects: ProjectItem[];
  cta: CTAContent;
  footer: FooterContent;
}
