import { createFeatureSelector, createSelector } from '@ngrx/store';
import { decodeJwt } from 'src/app/core/functions';
import { Authentication } from '../state/auth-state';

const getLoginError = (state: Authentication) => state.loginError;

const getRegisterError = (state: Authentication) => state.registerError;

const getIsLoading = (state: Authentication) => state.isLoading;

const getToken = (state: Authentication) => state.token;

const getLoggedIn = (state: Authentication) => !!state.token;

const getUserFromToken = (state: Authentication) => decodeJwt(state.token.access).user;

export const selectAuthState = createFeatureSelector<Authentication>('authentication');

export const selectLoginError = createSelector(
  selectAuthState,
  getLoginError,
);

export const selectRegisterError = createSelector(
  selectAuthState,
  getRegisterError,
);

export const selectIsLoading = createSelector(
  selectAuthState,
  getIsLoading,
);

export const selectToken = createSelector(
  selectAuthState,
  getToken,
);

export const selectLoggedIn = createSelector(
  selectAuthState,
  getLoggedIn,
);

export const selectUser = createSelector(
  selectAuthState,
  getUserFromToken,
);
