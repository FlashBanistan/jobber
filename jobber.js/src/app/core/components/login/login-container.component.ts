import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from './login.interface';
import { finalize } from 'rxjs/operators';
import { selectLoginError, selectIsLoading } from '../../store/selectors/auth-selectors';
import { AppState } from '../../store/state/state';
import { LoginClearError, LoginRequestAction } from '../../store/actions/auth-actions';

@Component({
  selector: 'app-login-container',
  template: `
    <app-login
      [error]="error$ | async"
      [isLoading]="isLoading$ | async"
      (login)="onLogin($event)"
    ></app-login>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
  error$ = this.store
    .select(selectLoginError)
    .pipe(finalize(() => this.store.dispatch(new LoginClearError())));
  isLoading$ = this.store.select(selectIsLoading);

  constructor(private store: Store<AppState>) {}

  onLogin(loginRequest: Login) {
    this.store.dispatch(new LoginRequestAction(loginRequest));
  }
}
