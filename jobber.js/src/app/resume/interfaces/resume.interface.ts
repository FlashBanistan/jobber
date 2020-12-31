import { Award } from "./award.interface";
import { Education } from "./education.interface";
import { ResumeLanguage } from "./resume-language.interface";
import { Publication } from "./publication.interface";
import { ResumeBasics } from "./resume-basics.interface";
import { Skill } from "./skill.interface";
import { Volunteer } from "./volunteer.interface";
import { Work } from "./work.interface";

export interface Resume {
  readonly id: number;
  readonly user: number;
  basics: ResumeBasics;
  work: Work[];
  volunteer: Volunteer[];
  education: Education[];
  awards: Award[];
  publications: Publication[];
  skills: Skill[];
  languages: ResumeLanguage[];
  interests: any[];
  references: any[];
}

export const getResume = (): Resume => {
  return {
    id: null,
    user: null,
    basics: {
      id: null,
      resume: null,
      name: "",
      label: "",
      picture: "",
      email: "",
      phone: "",
      website: "",
      summary: "",
      location: {
        address: "",
        postalCode: "",
        city: "",
        countryCode: "",
        region: "",
      },
      profiles: [],
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: [],
  };
};
