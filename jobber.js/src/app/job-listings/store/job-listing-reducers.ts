import { JobListingState, initialJobListingState } from "./job-listing-state";
import {
  JobListingActions,
  JobListingActionTypes,
} from "./job-listing-actions";

export function jobPostingReducers(
  state = initialJobListingState,
  action: JobListingActions
): JobListingState {
  switch (action.type) {
    // case JobListingActionTypes.SEARCH_JOBS:
    //   return {
    //     ...state,
    //     jobSearchCriteria: action.payload,
    //     error: null,
    //     isLoading: true,
    //   };
    default: {
      return state;
    }
  }
}
