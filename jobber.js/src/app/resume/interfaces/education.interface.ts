import { StudyType } from "../enums/study-type.enum";

export interface Education {
  id: number;
  resume: number;
  institution: string;
  area: string;
  studyType: StudyType;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
}
