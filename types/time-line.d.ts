export interface Timeline {
  experiences: {
    duration: string;
    position: string;
    company: string;
    companyLink?: string;
    mode: string;
    skills: { name: string }[];
    contribution?: { name: string }[];
  }[];
}
