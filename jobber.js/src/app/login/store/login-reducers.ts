import { createReducer, on } from "@ngrx/store";
import {
  login,
  loginClearError,
  loginFailure,
  loginSuccess,
  logout,
} from "./actions";
import { initialLoginState } from "./login-state";

export const loginReducers = createReducer(
  initialLoginState,
  on(login, (state) => ({
    ...state,
    loginError: null,
    isLoading: true,
  })),
  on(loginSuccess, (state, action) => ({
    ...state,
    token: action,
    loginError: null,
    isLoading: false,
  })),
  on(loginFailure, (state, action) => ({
    ...state,
    loginError: action.error,
    isLoading: false,
  })),
  on(loginClearError, (state) => ({
    ...state,
    loginError: null,
  })),
  on(logout, () => ({
    ...initialLoginState,
  }))
);
