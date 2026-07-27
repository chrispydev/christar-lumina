export interface SanityImage {
  _key?: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface Technology {
  _key?: string;
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
  image?: string; // add this
  title: string;
  slug: {
    current: string;
    _type: "slug";
  };
  tagline?: string;
  description?: string;
  coverImage?: SanityImage;
  coverImageAlt?: string;
  images?: SanityImage[];
  gallery?: SanityImage[];
  client?: string;
  industry?: string;
  category?: string;
  year?: number;
  role?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  technologies?: Technology[];
  services?: string[];
  testimonial?: Testimonial;
  metrics?: Metric[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  link?: string;
  body?: any;
  featured?: boolean;
  status?: "draft" | "published" | "archived";
}
