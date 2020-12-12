import { JobSearch, initialJobSearchState } from "./job-search-state";
import { Layout, initialLayoutState } from "./layout.state";

export interface AppState {
  layout: Layout;
  jobSearch: JobSearch;
}

export const initialAppState: AppState = {
  layout: initialLayoutState,
  jobSearch: initialJobSearchState,
};
