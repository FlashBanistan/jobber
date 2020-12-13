import { createFeatureSelector, createSelector } from "@ngrx/store";
import { decodeJwt } from "../../shared/functions/decode-jwt";
import { LoginState } from "./login-state";

const getLoginError = (state: LoginState) => state.loginError;

const getIsLoading = (state: LoginState) => state.isLoading;

const getToken = (state: LoginState) => state.token;

const getLoggedIn = (state: LoginState) => !!state.token;

const getUserFromToken = (state: LoginState) =>
  decodeJwt(state.token.access).user;

export const selectLoginState = createFeatureSelector<LoginState>("login");

export const selectLoginError = createSelector(selectLoginState, getLoginError);

export const selectIsLoading = createSelector(selectLoginState, getIsLoading);

export const selectToken = createSelector(selectLoginState, getToken);

export const selectLoggedIn = createSelector(selectLoginState, getLoggedIn);

export const selectUser = createSelector(selectLoginState, getUserFromToken);
