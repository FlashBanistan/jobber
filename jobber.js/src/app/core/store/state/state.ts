import { Authentication, initialAuthenticationState } from './auth-state';
import { JobSearch, initialJobSearchState } from './job-search-state';
import { Layout, initialLayoutState } from './layout.state';

export interface AppState {
  layout: Layout;
  authentication: Authentication;
  jobSearch: JobSearch;
}

export const initialAppState: AppState = {
  layout: initialLayoutState,
  authentication: initialAuthenticationState,
  jobSearch: initialJobSearchState,
};
