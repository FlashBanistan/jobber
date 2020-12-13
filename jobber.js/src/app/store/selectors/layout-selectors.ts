import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Layout } from '../state/layout.state';

const getIsMobile = (state: Layout) => state.isMobile;

const getIsJobDetailView = (state: Layout) => state.isJobDetailView;

const getSidenavMode = (state: Layout) => state.sidenavMode;

const getSidenavOpened = (state: Layout) => state.sidenavOpened;

export const selectLayoutState = createFeatureSelector<Layout>('layout');

export const selectIsMobile = createSelector(
  selectLayoutState,
  getIsMobile,
);

export const selectIsJobDetailView = createSelector(
  selectLayoutState,
  getIsJobDetailView,
);

export const selectSidenavMode = createSelector(
  selectLayoutState,
  getSidenavMode,
);

export const selectSidenavOpened = createSelector(
  selectLayoutState,
  getSidenavOpened,
);
