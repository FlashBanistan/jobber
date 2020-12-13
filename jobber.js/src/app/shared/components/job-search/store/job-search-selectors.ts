import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JobSearchState } from "./job-search-state";

const getJobSearchError = (state: JobSearchState) => state.error;

const getLocationSuggestions = (state: JobSearchState) =>
  state.locationSuggestions;

const getJobTitleSuggestions = (state: JobSearchState) =>
  state.jobTitleSuggestions;

export const selectJobSearchState = createFeatureSelector<JobSearchState>(
  "jobSearch"
);

export const selectJobSearchError = createSelector(
  selectJobSearchState,
  getJobSearchError
);

export const selectLocationSuggestions = createSelector(
  selectJobSearchState,
  getLocationSuggestions
);

export const selectJobTitleSuggestions = createSelector(
  selectJobSearchState,
  getJobTitleSuggestions
);
