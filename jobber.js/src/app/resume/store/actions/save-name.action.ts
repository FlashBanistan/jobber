import { createAction, props } from "@ngrx/store";

export const saveName = createAction(
  "[Resume] Save Name",
  props<{ name: string }>()
);
