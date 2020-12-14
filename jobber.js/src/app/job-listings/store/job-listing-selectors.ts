import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JobListingState } from "./job-listing-state";

const getJobListings = (state: JobListingState) => state.jobListings;
const getSelectedJobListing = (state: JobListingState) =>
  state.selectedJobListing;

export const selectJobListingState = createFeatureSelector<JobListingState>(
  "jobListings"
);

export const selectJobListings = createSelector(
  selectJobListingState,
  getJobListings
);

export const selectSelectedJobListing = createSelector(
  selectJobListingState,
  getSelectedJobListing
);
