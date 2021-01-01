import { Award } from "./sections/awards/award.interface";
import { Education } from "./sections/education/education.interface";
import { ResumeLanguage } from "./sections/contact-information/resume-language.interface";
import { Publication } from "./sections/publications/publication.interface";
import { ResumeBasics } from "./sections/contact-information/resume-basics.interface";
import { Skill } from "./sections/skills/skill.interface";
import { Volunteer } from "./sections/volunteer-work/volunteer.interface";
import { Work } from "./sections/work-experience/work.interface";

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
