import { StudyType } from "./study-type.enum";

export interface Education {
  readonly id: number;
  readonly resume: number;
  institution: string;
  area: string;
  studyType: StudyType;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
}
