import { Resume } from "../interfaces/resume.interface";

export interface ResumeState {
  resume: Resume;
  isLoading: boolean;
}

export const initialResumeState: ResumeState = {
  resume: null,
  isLoading: false,
};
