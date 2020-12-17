import { SkillLevel } from "../enums/skill-level.enum";

export interface Skill {
  id: number;
  resume: number;
  name: string;
  level: SkillLevel;
  keywords: string[];
}
