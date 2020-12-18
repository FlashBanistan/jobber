import { FluencyLevel } from "../enums/fluency-level.enum";
import { Language as LanguageEnum } from "../enums/language.enum";

export interface Language {
  readonly id: number;
  readonly resume: number;
  language: LanguageEnum;
  fluency: FluencyLevel;
}
