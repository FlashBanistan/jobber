import { createAction, props } from "@ngrx/store";

export const loginFailure = createAction(
  "[Login] Login Failure",
  props<{ error: string }>()
);
