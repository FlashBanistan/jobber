import { getResume, Resume } from "../interfaces/resume.interface";

export interface ResumeState {
  resume: Resume;
  isEditingSummary: boolean;
  isLoading: boolean;
}

export const initialResumeState: ResumeState = {
  resume: {
    ...getResume(),
    basics: {
      ...getResume().basics,
      summary: `I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. Currently, I am looking for new career opportunities my current job position cannot provide.`,
    },
  },
  isEditingSummary: false,
  isLoading: false,
};
