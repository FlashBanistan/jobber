import { initialLayoutState, Layout } from '../state/layout.state';
import { LayoutActions, LayoutActionTypes } from '../actions/layout.actions';

export function layoutReducers(state = initialLayoutState, action: LayoutActions): Layout {
  switch (action.type) {
    case LayoutActionTypes.INITIALIZE_MOBILE_VIEW:
      return {
        ...state,
        sidenavOpened: false,
        isMobile: true,
        sidenavMode: 'over',
      };
    case LayoutActionTypes.INITIALIZE_DESKTOP_VIEW:
      return {
        ...state,
        sidenavOpened: true,
        isMobile: false,
        sidenavMode: 'side',
      };
    case LayoutActionTypes.TOGGLE_SIDENAV:
      return {
        ...state,
        sidenavOpened: !state.sidenavOpened,
      };
    case LayoutActionTypes.TOGGLE_JOB_DETAILS_VIEW:
      return {
        ...state,
        isJobDetailView: !state.isJobDetailView,
      };
    default: {
      return state;
    }
  }
}
