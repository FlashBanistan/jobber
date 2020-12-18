import { Award } from "./award.interface";
import { Education } from "./education.interface";
import { Language } from "./language.interface";
import { OnlineProfile } from "./online-profile.interface";
import { Publication } from "./publication.interface";
import { Skill } from "./skill.interface";
import { Volunteer } from "./volunteer.interface";
import { Work } from "./work.interface";

export interface Resume {
  id: number;
  user: number;
  title: string;
  name: string;
  label: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  profiles: OnlineProfile[];
  work: Work[];
  volunteer: Volunteer[];
  education: Education[];
  awards: Award[];
  publications: Publication[];
  skills: Skill[];
  languages: Language[];
}

export const getResume = (): Resume => {
  return {
    id: null,
    user: null,
    title: "",
    name: "",
    label: "",
    email: "",
    phone: "",
    website: "",
    summary: "",
    profiles: [],
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    publications: [],
    skills: [],
    languages: [],
  };
};
