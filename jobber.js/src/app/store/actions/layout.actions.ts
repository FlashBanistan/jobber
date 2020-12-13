import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  INITIALIZE_MOBILE_VIEW = '[Layout] Initialize Mobile View',
  INITIALIZE_DESKTOP_VIEW = '[Layout] Initialize Desktop View',
  TOGGLE_SIDENAV = '[Layout] Toggle Sidenav',
  TOGGLE_JOB_DETAILS_VIEW = '[Layout] Toggle Job Details View',
}

export class InitializeMobileViewAction implements Action {
  readonly type = LayoutActionTypes.INITIALIZE_MOBILE_VIEW;
  constructor() {}
}

export class InitializeDesktopViewAction implements Action {
  readonly type = LayoutActionTypes.INITIALIZE_DESKTOP_VIEW;
  constructor() {}
}

export class ToggleSidenavAction implements Action {
  readonly type = LayoutActionTypes.TOGGLE_SIDENAV;
  constructor() {}
}

export class ToggleJobDetailsView implements Action {
  readonly type = LayoutActionTypes.TOGGLE_JOB_DETAILS_VIEW;
  constructor() {}
}

export type LayoutActions =
  | InitializeMobileViewAction
  | InitializeDesktopViewAction
  | ToggleSidenavAction
  | ToggleJobDetailsView;
