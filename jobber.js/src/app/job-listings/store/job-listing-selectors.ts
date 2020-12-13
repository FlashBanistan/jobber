import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JobListingState } from "./job-listing-state";

const getJobListings = (state: JobListingState) => state.jobListings;

export const selectJobListingState = createFeatureSelector<JobListingState>(
  "jobListing"
);

export const selectJobListings = createSelector(
  selectJobListingState,
  getJobListings
);
