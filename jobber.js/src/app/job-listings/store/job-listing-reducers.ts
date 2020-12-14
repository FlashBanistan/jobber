import { JobListingState, initialJobListingState } from "./job-listing-state";
import {
  JobListingActions,
  JobListingActionTypes,
} from "./job-listing-actions";

export function jobListingReducers(
  state = initialJobListingState,
  action: JobListingActions
): JobListingState {
  switch (action.type) {
    case JobListingActionTypes.SEARCH_JOBS_SUCCESS:
      return {
        ...state,
        jobListings: action.payload,
        error: null,
        isLoading: true,
      };
    case JobListingActionTypes.SELECT_JOB_LISTING:
      return {
        ...state,
        selectedJobListing: action.payload,
      };
    default: {
      return state;
    }
  }
}
