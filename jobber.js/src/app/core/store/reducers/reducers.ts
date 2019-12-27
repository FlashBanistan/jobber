import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/state';
import { authReducers } from './auth-reducers';
import { jobSearchReducers } from './job-search-reducers';
import { layoutReducers } from './layout-reducers';

export const appReducers: ActionReducerMap<AppState> = {
  layout: layoutReducers,
  authentication: authReducers,
  jobSearch: jobSearchReducers,
};
