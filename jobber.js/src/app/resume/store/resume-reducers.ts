import { createReducer, on } from "@ngrx/store";
import { fetchResume } from "./actions";
import { initialResumeState } from "./resume-state";

export const resumeReducers = createReducer(
  initialResumeState,
  on(fetchResume, (state) => ({
    ...state,
    isLoading: true,
  }))
);
