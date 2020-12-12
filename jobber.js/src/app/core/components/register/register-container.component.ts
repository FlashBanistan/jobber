import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Register } from "./register.interface";
import { finalize } from "rxjs/operators";
import {
  selectRegisterError,
  selectIsLoading,
} from "../../../login/store/login-selectors";
import { AppState } from "../../store/state/state";
import {
  RegisterClearError,
  RegisterRequestAction,
} from "../../../login/store/login-actions";

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
