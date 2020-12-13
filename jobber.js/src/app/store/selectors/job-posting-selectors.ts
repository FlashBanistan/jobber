import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JobPostingState } from "../state/job-posting-state";

const getJobPostings = (state: JobPostingState) => state.jobPostings;

export const selectJobSearchState = createFeatureSelector<JobPostingState>(
  "jobPosting"
);

export const selectJobPostings = createSelector(
  selectJobSearchState,
  getJobPostings
);
