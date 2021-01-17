import { createAction, props } from "@ngrx/store";
import { Work } from "../../sections/work-experience/work.interface";

export const saveWorkExperience = createAction(
  "[Resume] Save Work Experience",
  props<{ workExperience: Work[] }>()
);
