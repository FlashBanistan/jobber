import { createAction, props } from "@ngrx/store";
import { ResumeLocation } from "../../sections/contact-information/resume-location.interface";

export const saveLocation = createAction(
  "[Resume] Save Location",
  props<{ location: ResumeLocation }>()
);
