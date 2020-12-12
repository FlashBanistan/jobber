import { Action } from "@ngrx/store";
import { User } from "src/app/core/models";
import { Register } from "../register.interface";

export enum RegisterActionTypes {
  REGISTER_REQUEST = "[Register] Register Request",
  REGISTER_FAILURE = "[Register] Register Failure",
  REGISTER_SUCCESS = "[Register] Register Success",
  REGISTER_CLEAR_ERROR = "[Register] Register Clear Error",
}

export class RegisterRequestAction implements Action {
  readonly type = RegisterActionTypes.REGISTER_REQUEST;
  constructor(public payload: Register) {}
}

export class RegisterFailureAction implements Action {
  readonly type = RegisterActionTypes.REGISTER_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class RegisterSuccessAction implements Action {
  readonly type = RegisterActionTypes.REGISTER_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export class RegisterClearError implements Action {
  readonly type = RegisterActionTypes.REGISTER_CLEAR_ERROR;
  constructor() {}
}

export type RegisterActions =
  | RegisterRequestAction
  | RegisterFailureAction
  | RegisterSuccessAction
  | RegisterClearError;
