import { createAction, props } from "@ngrx/store";
import { ResumeLanguage } from "../../interfaces/resume-language.interface";

export const saveLanguages = createAction(
  "[Resume] Save Languages",
  props<{ languages: ResumeLanguage[] }>()
);
