export enum Language {
  MANDARIN = "MANDARIN",
  ENGLISH = "ENGLISH",
  SPANISH = "SPANISH",
  WESTERN_PUNJABI = "WESTERN_PUNJABI",
  // TODO: Get rest of list.
}

export const getResumeLanguageOptions = (): Language[] => {
  return Object.values(Language);
};
