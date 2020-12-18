import { OnlineProfile } from "./online-profile.interface";
import { ResumeLocation } from "./resume-location.interface";

export interface ResumeBasics {
  readonly id: number;
  readonly user: number;
  name: string;
  label: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: ResumeLocation;
  profiles: OnlineProfile[];
}
