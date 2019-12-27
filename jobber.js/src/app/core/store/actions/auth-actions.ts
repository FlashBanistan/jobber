import { Action } from '@ngrx/store';
import { Token, User } from 'src/app/core/models';
import { Login } from '../../components/login/login.interface';
import { Register } from '../../components/register/register.interface';

export enum ActionTypes {
  LOGIN_REQUEST = '[Authentication] Login Request',
  LOGIN_FAILURE = '[Authentication] Login Failure',
  LOGIN_SUCCESS = '[Authentication] Login Success',
  LOGIN_CLEAR_ERROR = '[Authentication] Login Clear Error',
  LOGOUT_REQUEST = '[Authentication] Logout Request',
  REGISTER_REQUEST = '[Authentication] Register Request',
  REGISTER_FAILURE = '[Authentication] Register Failure',
  REGISTER_SUCCESS = '[Authentication] Register Success',
  REGISTER_CLEAR_ERROR = '[Authentication] Register Clear Error',
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: Login) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { token: Token }) {}
}

export class LoginClearError implements Action {
  readonly type = ActionTypes.LOGIN_CLEAR_ERROR;
  constructor() {}
}

export class LogoutRequestAction implements Action {
  readonly type = ActionTypes.LOGOUT_REQUEST;
  constructor() {}
}

export class RegisterRequestAction implements Action {
  readonly type = ActionTypes.REGISTER_REQUEST;
  constructor(public payload: Register) {}
}

export class RegisterFailureAction implements Action {
  readonly type = ActionTypes.REGISTER_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class RegisterSuccessAction implements Action {
  readonly type = ActionTypes.REGISTER_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export class RegisterClearError implements Action {
  readonly type = ActionTypes.REGISTER_CLEAR_ERROR;
  constructor() {}
}

export type AuthActions =
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction
  | LoginClearError
  | LogoutRequestAction
  | RegisterRequestAction
  | RegisterFailureAction
  | RegisterSuccessAction
  | RegisterClearError;
