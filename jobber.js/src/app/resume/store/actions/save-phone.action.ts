import { createAction, props } from "@ngrx/store";

export const savePhone = createAction(
  "[Resume] Save Phone",
  props<{ phone: string }>()
);
