import { FluencyLevel } from "./fluency-level.enum";
import { Language as LanguageEnum } from "./language.enum";

export interface ResumeLanguage {
  readonly id: number;
  readonly resume: number;
  language: LanguageEnum;
  fluency: FluencyLevel;
}

export const getResumeLanguage = (): ResumeLanguage => {
  return {
    id: null,
    resume: null,
    language: null,
    fluency: null,
  };
};
