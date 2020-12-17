import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Login } from "./login.interface";
import { selectLoginError, selectIsLoading } from "./store/login-selectors";
import { login } from "./store/actions";
import { LoginState } from "./store/login-state";

@Component({
  selector: "app-login-container",
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
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<LoginState>) {
    this.error$ = this.store.select(selectLoginError);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  onLogin(loginRequest: Login) {
    this.store.dispatch(login(loginRequest));
  }
}
