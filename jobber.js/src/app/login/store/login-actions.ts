import { Action } from "@ngrx/store";
import { Login } from "../login.interface";
import { Token } from "../token.interface";

export enum LoginActionTypes {
  LOGIN_REQUEST = "[Login] Login Request",
  LOGIN_FAILURE = "[Login] Login Failure",
  LOGIN_SUCCESS = "[Login] Login Success",
  LOGIN_CLEAR_ERROR = "[Login] Login Clear Error",
  LOGOUT_REQUEST = "[Login] Logout Request",
}

export class LoginRequestAction implements Action {
  readonly type = LoginActionTypes.LOGIN_REQUEST;
  constructor(public payload: Login) {}
}

export class LoginFailureAction implements Action {
  readonly type = LoginActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { token: Token }) {}
}

export class LoginClearError implements Action {
  readonly type = LoginActionTypes.LOGIN_CLEAR_ERROR;
  constructor() {}
}

export class LogoutRequestAction implements Action {
  readonly type = LoginActionTypes.LOGOUT_REQUEST;
  constructor() {}
}

export type LoginActions =
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction
  | LoginClearError
  | LogoutRequestAction;
