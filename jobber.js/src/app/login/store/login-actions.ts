import { Action } from "@ngrx/store";
import { User } from "src/app/core/models";
import { Login } from "../login.interface";
import { Register } from "../../core/components/register/register.interface";
import { Token } from "../token.interface";

export enum LoginActionTypes {
  LOGIN_REQUEST = "[Login] Login Request",
  LOGIN_FAILURE = "[Login] Login Failure",
  LOGIN_SUCCESS = "[Login] Login Success",
  LOGIN_CLEAR_ERROR = "[Login] Login Clear Error",
  LOGOUT_REQUEST = "[Login] Logout Request",
  REGISTER_REQUEST = "[Register] Register Request",
  REGISTER_FAILURE = "[Register] Register Failure",
  REGISTER_SUCCESS = "[Register] Register Success",
  REGISTER_CLEAR_ERROR = "[Register] Register Clear Error",
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

export class RegisterRequestAction implements Action {
  readonly type = LoginActionTypes.REGISTER_REQUEST;
  constructor(public payload: Register) {}
}

export class RegisterFailureAction implements Action {
  readonly type = LoginActionTypes.REGISTER_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class RegisterSuccessAction implements Action {
  readonly type = LoginActionTypes.REGISTER_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export class RegisterClearError implements Action {
  readonly type = LoginActionTypes.REGISTER_CLEAR_ERROR;
  constructor() {}
}

export type LoginActions =
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction
  | LoginClearError
  | LogoutRequestAction
  | RegisterRequestAction
  | RegisterFailureAction
  | RegisterSuccessAction
  | RegisterClearError;
