import { JobSearch, initialJobSearchState } from '../state/job-search-state';
import { JobSearchActions, JobSearchActionTypes } from '../actions/job-search-actions';

export function jobSearchReducers(
  state = initialJobSearchState,
  action: JobSearchActions,
): JobSearch {
  switch (action.type) {
    case JobSearchActionTypes.JOB_TITLE_SUGGESTIONS:
      return {
        ...state,
        jobSearchCriteria: {
          ...state.jobSearchCriteria,
          jobTitle: action.payload,
        },
        error: null,
        isLoading: true,
      };
    case JobSearchActionTypes.JOB_TITLE_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        jobTitleSuggestions: action.payload.jobTitleSuggestions,
        error: null,
        isLoading: false,
      };
    case JobSearchActionTypes.JOB_TITLE_SUGGESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case JobSearchActionTypes.LOCATION_SUGGESTIONS:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case JobSearchActionTypes.LOCATION_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        locationSuggestions: action.payload.locationSuggestions,
        error: null,
        isLoading: false,
      };
    case JobSearchActionTypes.LOCATION_SUGGESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case JobSearchActionTypes.LOCATION_SELECTED:
      return {
        ...state,
        jobSearchCriteria: {
          ...state.jobSearchCriteria,
          location: action.payload.location,
        },
      };
    case JobSearchActionTypes.SEARCH_JOBS:
      return {
        ...state,
        jobSearchCriteria: action.payload,
        error: null,
        isLoading: true,
      };
    default: {
      return state;
    }
  }
}
