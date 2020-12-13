import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectLoggedIn } from "./login/store/login-selectors";
import { AppState } from "./store/state/state";
import { LogoutRequestAction } from "./login/store/login-actions";
import { LayoutService } from "./shared/services/layout.service";
import { selectIsMobile } from "./store/selectors/layout-selectors";
import { ToggleSidenavAction } from "./store/actions/layout.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  loggedIn$ = this.store.select(selectLoggedIn);
  isMobileView$ = this.store.select(selectIsMobile);

  // Have to inject LayoutService to initialize it even though I don't use it anywhere.
  constructor(
    private store: Store<AppState>,
    private screenSizeService: LayoutService
  ) {}

  logout() {
    this.store.dispatch(new LogoutRequestAction());
  }

  toggleDrawer() {
    this.store.dispatch(new ToggleSidenavAction());
  }
}
