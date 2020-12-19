import { createAction, props } from "@ngrx/store";

export const saveWebsite = createAction(
  "[Resume] Save Website",
  props<{ website: string }>()
);
