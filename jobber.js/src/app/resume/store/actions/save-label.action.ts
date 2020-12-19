import { createAction, props } from "@ngrx/store";

export const saveLabel = createAction(
  "[Resume] Save Label",
  props<{ label: string }>()
);
