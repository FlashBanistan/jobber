import { createAction, props } from "@ngrx/store";

export const saveSummary = createAction(
  "[Resume] Save Summary",
  props<{ summary: string }>()
);
