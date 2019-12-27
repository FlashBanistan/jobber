import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobSearch } from '../state/job-search-state';

const getJobSearchError = (state: JobSearch) => state.error;

const getLocationSuggestions = (state: JobSearch) => state.locationSuggestions;

const getJobTitleSuggestions = (state: JobSearch) => state.jobTitleSuggestions;

const getJobPostings = (state: JobSearch) => state.jobPostings;

export const selectJobSearchState = createFeatureSelector<JobSearch>('jobSearch');

export const selectJobSearchError = createSelector(
  selectJobSearchState,
  getJobSearchError,
);

export const selectLocationSuggestions = createSelector(
  selectJobSearchState,
  getLocationSuggestions,
);

export const selectJobTitleSuggestions = createSelector(
  selectJobSearchState,
  getJobTitleSuggestions,
);

export const selectJobPostings = createSelector(
  selectJobSearchState,
  getJobPostings,
);
