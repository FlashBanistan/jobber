import { Action } from '@ngrx/store';
import { Location, JobPosting, JobSearchCriteria } from '../../models';

export enum JobSearchActionTypes {
  JOB_TITLE_SUGGESTIONS = '[Job Search] Job Title Suggestions',
  JOB_TITLE_SUGGESTIONS_FAILURE = '[Job Search] Job Title Suggestions Failure',
  JOB_TITLE_SUGGESTIONS_SUCCESS = '[Job Search] Job Title Suggestions Success',
  LOCATION_SUGGESTIONS = '[Job Search] Job Location Suggestions',
  LOCATION_SUGGESTIONS_FAILURE = '[Job Search] Location Suggestions Failure',
  LOCATION_SUGGESTIONS_SUCCESS = '[Job Search] Location Suggestions Success',
  LOCATION_SELECTED = '[Job Search] Location Selected',
  SEARCH_JOBS = '[Job Search] Search Jobs',
  SEARCH_JOBS_FAILURE = '[Job Search] Search Jobs Failure',
  SEARCH_JOBS_SUCCESS = '[Job Search] Search Jobs Success',
}

export class JobTitleSuggestionsAction implements Action {
  readonly type = JobSearchActionTypes.JOB_TITLE_SUGGESTIONS;
  constructor(public payload: string) {}
}

export class JobTitleSuggestionsFailureAction implements Action {
  readonly type = JobSearchActionTypes.JOB_TITLE_SUGGESTIONS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class JobTitleSuggestionsSuccessAction implements Action {
  readonly type = JobSearchActionTypes.JOB_TITLE_SUGGESTIONS_SUCCESS;
  constructor(public payload: { jobTitleSuggestions: string[] }) {}
}

export class LocationSuggestionsAction implements Action {
  readonly type = JobSearchActionTypes.LOCATION_SUGGESTIONS;
  constructor(public payload: string) {}
}

export class LocationSuggestionsFailureAction implements Action {
  readonly type = JobSearchActionTypes.LOCATION_SUGGESTIONS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LocationSuggestionsSuccessAction implements Action {
  readonly type = JobSearchActionTypes.LOCATION_SUGGESTIONS_SUCCESS;
  constructor(public payload: { locationSuggestions: Location[] }) {}
}

export class LocationSelectedAction implements Action {
  readonly type = JobSearchActionTypes.LOCATION_SELECTED;
  constructor(public payload: { location: Location }) {}
}

export class SearchJobsAction implements Action {
  readonly type = JobSearchActionTypes.SEARCH_JOBS;
  constructor(public payload: JobSearchCriteria) {}
}

export class SearchJobsFailureAction implements Action {
  readonly type = JobSearchActionTypes.SEARCH_JOBS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class SearchJobsSuccessAction implements Action {
  readonly type = JobSearchActionTypes.SEARCH_JOBS_SUCCESS;
  constructor(public payload: { jobs: JobPosting[] }) {}
}

export type JobSearchActions =
  | JobTitleSuggestionsAction
  | JobTitleSuggestionsFailureAction
  | JobTitleSuggestionsSuccessAction
  | LocationSuggestionsAction
  | LocationSuggestionsFailureAction
  | LocationSuggestionsSuccessAction
  | LocationSelectedAction
  | SearchJobsAction
  | SearchJobsFailureAction
  | SearchJobsSuccessAction;
