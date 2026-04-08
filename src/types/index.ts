export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  fullImageUrl: string;
  liveUrl: string;
  comingSoon?: boolean;
  caseStudy: {
    brief: string;
    role: string;
    tools: string[];
    approach: string;
    results: string;
    metrics: string[];
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Skill {
  name: string;
  category: "Design" | "Webflow" | "Development" | "Integrations";
}
