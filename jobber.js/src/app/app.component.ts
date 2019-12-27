import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoggedIn } from './core/store/selectors/auth-selectors';
import { AppState } from './core/store/state/state';
import { LogoutRequestAction } from './core/store/actions/auth-actions';
import { LayoutService } from './core/services';
import { selectIsMobile } from './core/store/selectors/layout-selectors';
import { ToggleSidenavAction } from './core/store/actions/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loggedIn$ = this.store.select(selectLoggedIn);
  isMobileView$ = this.store.select(selectIsMobile);

  // Have to inject LayoutService to initialize it even though I don't use it anywhere.
  constructor(private store: Store<AppState>, private screenSizeService: LayoutService) {}

  logout() {
    this.store.dispatch(new LogoutRequestAction());
  }

  toggleDrawer() {
    this.store.dispatch(new ToggleSidenavAction());
  }
}
