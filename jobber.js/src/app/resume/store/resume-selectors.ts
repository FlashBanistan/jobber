import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ResumeState } from "./resume-state";

const getIsLoading = (state: ResumeState) => state.isLoading;

export const selectResumeState = createFeatureSelector<ResumeState>("resume");

export const selectIsLoading = createSelector(selectResumeState, getIsLoading);
