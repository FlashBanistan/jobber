import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/state";
import { jobPostingReducers } from "./job-posting-reducers";
import { layoutReducers } from "./layout-reducers";

export function defaultReducer<T>(state: T) {
  return state;
}

export const appReducers: ActionReducerMap<AppState> = {
  login: defaultReducer,
  register: defaultReducer,
  layout: layoutReducers,
  jobPosting: jobPostingReducers,
};
