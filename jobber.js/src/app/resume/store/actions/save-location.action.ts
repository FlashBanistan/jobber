import { createAction, props } from "@ngrx/store";
import { ResumeLocation } from "../../interfaces/resume-location.interface";

export const saveLocation = createAction(
  "[Resume] Save Location",
  props<{ location: ResumeLocation }>()
);
