export interface SanityImage {
  _key: string;
  url: string;
  alt?: string;
  caption?: string;
}

export interface Technology {
  _key: string;
  name: string;
  icon?: string;
  category?: "frontend" | "backend" | "database" | "devops" | "design";
}

export interface Metric {
  label: string;
  value: string;
  icon?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface Project {
  _id: string;
  _createdAt: string;
  title: string;
  slug: { current: string; _type: "slug" };
  tagline?: string;
  description?: string;
  coverImage?: string;
  coverImageAlt?: string;
  client?: string;
  industry?: string;
  year?: number;
  role?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  technologies?: Technology[];
  gallery?: SanityImage[];
  testimonial?: Testimonial;
  metrics?: Metric[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  status?: "draft" | "published" | "archived";
}
