import { createAction, props } from "@ngrx/store";
import { ResumeLanguage } from "../../sections/contact-information/resume-language.interface";

export const saveLanguages = createAction(
  "[Resume] Save Languages",
  props<{ languages: ResumeLanguage[] }>()
);
