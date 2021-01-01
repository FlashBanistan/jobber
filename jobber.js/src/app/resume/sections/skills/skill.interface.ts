import { SkillLevel } from "./skill-level.enum";

export interface Skill {
  readonly id: number;
  readonly resume: number;
  name: string;
  level: SkillLevel;
  keywords: string[];
}
