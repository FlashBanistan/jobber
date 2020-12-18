import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ResumeState } from "./resume-state";

const getIsLoading = (state: ResumeState) => state.isLoading;

const getSummarySection = (state: ResumeState) => state.resume.basics.summary;

const getIsEditingSummary = (state: ResumeState) => state.isEditingSummary;

export const selectResumeState = createFeatureSelector<ResumeState>("resume");

export const selectSummarySection = createSelector(
  selectResumeState,
  getSummarySection
);

export const selectIsEditingSummary = createSelector(
  selectResumeState,
  getIsEditingSummary
);

export const selectIsLoading = createSelector(selectResumeState, getIsLoading);
