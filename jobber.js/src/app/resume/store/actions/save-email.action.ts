import { createAction, props } from "@ngrx/store";

export const saveEmail = createAction(
  "[Resume] Save Email",
  props<{ email: string }>()
);
