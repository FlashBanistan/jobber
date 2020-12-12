import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RegisterState } from "./register-state";

const getRegisterError = (state: RegisterState) => state.registerError;

const getIsLoading = (state: RegisterState) => state.isLoading;

export const selectRegisterState = createFeatureSelector<RegisterState>(
  "register"
);

export const selectRegisterError = createSelector(
  selectRegisterState,
  getRegisterError
);

export const selectIsLoading = createSelector(
  selectRegisterState,
  getIsLoading
);
