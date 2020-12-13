import {
  JobPostingState,
  initialJobPostingState,
} from "../state/job-posting-state";
import {
  JobPostingActions,
  JobPostingActionTypes,
} from "../actions/job-posting-actions";

export function jobPostingReducers(
  state = initialJobPostingState,
  action: JobPostingActions
): JobPostingState {
  switch (action.type) {
    // case JobPostingActionTypes.SEARCH_JOBS:
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
