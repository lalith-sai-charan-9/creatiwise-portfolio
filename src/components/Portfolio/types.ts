export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  liveSiteUrl?: string;
  caseStudyUrl?: string;
}