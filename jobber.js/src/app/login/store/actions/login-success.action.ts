import { createAction, props } from "@ngrx/store";
import { Token } from "../../token.interface";

export const loginSuccess = createAction(
  "[Login] Login Success",
  props<Token>()
);
