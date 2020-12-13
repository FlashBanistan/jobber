import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { finalize } from "rxjs/operators";
import { AppState } from "../store/state/state";
import {
  RegisterClearError,
  RegisterRequestAction,
} from "./store/register-actions";
import {
  selectIsLoading,
  selectRegisterError,
} from "./store/register-selectors";
import { Register } from "./register.interface";

@Component({
  selector: "app-register-container",
  template: `
    <app-register
      [error]="error$ | async"
      [isLoading]="isLoading$ | async"
      (register)="onRegister($event)"
    ></app-register>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContainerComponent {
  error$ = this.store
    .select(selectRegisterError)
    .pipe(finalize(() => this.store.dispatch(new RegisterClearError())));
  isLoading$ = this.store.select(selectIsLoading);

  constructor(private store: Store<AppState>) {}

  onRegister(registerRequest: Register) {
    this.store.dispatch(new RegisterRequestAction(registerRequest));
  }
}
