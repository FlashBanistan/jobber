import { createAction, props } from "@ngrx/store";

export const savePicture = createAction(
  "[Resume] Save Picture",
  props<{ picture: string }>()
);
