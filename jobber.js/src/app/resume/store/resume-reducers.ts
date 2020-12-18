import { createReducer, on } from "@ngrx/store";
import { fetchResume, saveSummary, toggleIsEditingSummary } from "./actions";
import { initialResumeState } from "./resume-state";

export const resumeReducers = createReducer(
  initialResumeState,
  on(fetchResume, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(toggleIsEditingSummary, (state) => ({
    ...state,
    isEditingSummary: !state.isEditingSummary,
  })),
  on(saveSummary, (state, action) => ({
    ...state,
    resume: {
      ...state.resume,
      summary: action.summary,
    },
    isEditingSummary: false,
  }))
);
