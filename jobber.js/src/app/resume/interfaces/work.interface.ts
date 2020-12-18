export interface Work {
  readonly id: number;
  readonly resume: number;
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}
