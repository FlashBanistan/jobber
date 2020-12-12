import { Injectable } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/store/state/state";
import {
  InitializeMobileViewAction,
  InitializeDesktopViewAction,
} from "../../core/store/actions/layout.actions";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  constructor(
    private store: Store<AppState>,
    private breakpointObserver: BreakpointObserver
  ) {
    this.observeScreenSize();
  }

  private observeScreenSize() {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .subscribe((result) => {
        if (result.matches) {
          this.store.dispatch(new InitializeMobileViewAction());
        } else {
          this.store.dispatch(new InitializeDesktopViewAction());
        }
      });
  }
}
