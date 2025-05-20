import { projects } from '@/lib/data/projects';
export type Testimonial = {
  content: string;
  link?: string;
  author: string;
  role: string;
  avatar?: string;
  date: string;
  rating?: number;
  company: string;
  verificationStatus: 'verified' | 'pending' | 'unverified';
  projects?: string;
  projectType: string;
};
