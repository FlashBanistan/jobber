import { initialLoginState, LoginState } from "src/app/login/store/login-state";
import { JobSearch, initialJobSearchState } from "./job-search-state";
import { Layout, initialLayoutState } from "./layout.state";

export interface AppState {
  login: LoginState;
  layout: Layout;
  jobSearch: JobSearch;
}

export const initialAppState: AppState = {
  login: initialLoginState,
  layout: initialLayoutState,
  jobSearch: initialJobSearchState,
};
