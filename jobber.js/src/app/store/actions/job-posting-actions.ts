import { Action } from "@ngrx/store";
import { JobSearchCriteria } from "../../shared/components/job-search/job-search-criteria";
import { JobPosting } from "../../job-posting/job-posting";

export enum JobPostingActionTypes {
  SEARCH_JOBS = "[Job Search] Search Jobs",
  SEARCH_JOBS_FAILURE = "[Job Search] Search Jobs Failure",
  SEARCH_JOBS_SUCCESS = "[Job Search] Search Jobs Success",
}

export class SearchJobsAction implements Action {
  readonly type = JobPostingActionTypes.SEARCH_JOBS;
  constructor(public payload: JobSearchCriteria) {}
}

export class SearchJobsFailureAction implements Action {
  readonly type = JobPostingActionTypes.SEARCH_JOBS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class SearchJobsSuccessAction implements Action {
  readonly type = JobPostingActionTypes.SEARCH_JOBS_SUCCESS;
  constructor(public payload: { jobs: JobPosting[] }) {}
}

export type JobPostingActions =
  | SearchJobsAction
  | SearchJobsFailureAction
  | SearchJobsSuccessAction;
