export interface Volunteer {
  readonly id: number;
  readonly resume: number;
  organization: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}
