import { Action } from "@ngrx/store";
import { JobSearchCriteria } from "../../shared/components/job-search/job-search-criteria";
import { JobListing } from "../job-listing";

export enum JobListingActionTypes {
  SEARCH_JOBS = "[Job Listing] Search Jobs",
  SEARCH_JOBS_FAILURE = "[Job Listing] Search Jobs Failure",
  SEARCH_JOBS_SUCCESS = "[Job Listing] Search Jobs Success",
}

export class SearchJobsAction implements Action {
  readonly type = JobListingActionTypes.SEARCH_JOBS;
  constructor(public payload: JobSearchCriteria) {}
}

export class SearchJobsFailureAction implements Action {
  readonly type = JobListingActionTypes.SEARCH_JOBS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class SearchJobsSuccessAction implements Action {
  readonly type = JobListingActionTypes.SEARCH_JOBS_SUCCESS;
  constructor(public payload: { jobs: JobListing[] }) {}
}

export type JobListingActions =
  | SearchJobsAction
  | SearchJobsFailureAction
  | SearchJobsSuccessAction;
