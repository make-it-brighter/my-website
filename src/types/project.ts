export type ProjectCategory = 'web-app' | 'ai-ml' | 'mobile' | 'blockchain' | 'tool';

export interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  technologies: string[];
  github?: string;
  live: string;
  details: boolean;
  projectDetailsPageSlug: string;
  isWorking: boolean;
  category: ProjectCategory;
}

export interface ProjectCaseStudyFrontmatter {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  timeline: string;
  role: string;
  team?: string;
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  challenges?: string[];
  learnings?: string[];
  isPublished: boolean;
}

export interface ProjectCaseStudy {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export interface ProjectCaseStudyPreview {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
}
