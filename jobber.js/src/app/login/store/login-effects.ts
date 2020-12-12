import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import * as loginActions from "./login-actions";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { LoginService } from "../login.service";
import { RegisterSuccessDialogComponent } from "../../core/components/register-success-dialog/register-success-dialog.component";

@Injectable()
export class LoginEffects {
  constructor(
    private loginService: LoginService,
    private actions$: Actions,
    private router: Router,
    private dialog: MatDialog
  ) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.LoginRequestAction>(
      loginActions.LoginActionTypes.LOGIN_REQUEST
    ),
    switchMap((action) =>
      this.loginService.getToken(action.payload).pipe(
        map(
          (token) =>
            new loginActions.LoginSuccessAction({
              token,
            })
        ),
        catchError((error) =>
          of(new loginActions.LoginFailureAction({ error: error.error.detail }))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.LoginSuccessAction>(
      loginActions.LoginActionTypes.LOGIN_SUCCESS
    ),
    tap(() => this.router.navigate(["/"]))
  );

  @Effect()
  registerRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.RegisterRequestAction>(
      loginActions.LoginActionTypes.REGISTER_REQUEST
    ),
    switchMap((action) =>
      this.loginService.registerNewUser(action.payload).pipe(
        map((user) => new loginActions.RegisterSuccessAction({ user })),
        catchError((error) =>
          of(
            new loginActions.RegisterFailureAction({
              error: error.error.email[0],
            })
          )
        )
      )
    )
  );

  @Effect({ dispatch: false })
  registerSuccess$ = this.actions$.pipe(
    ofType<loginActions.RegisterSuccessAction>(
      loginActions.LoginActionTypes.REGISTER_SUCCESS
    ),
    map((action: loginActions.RegisterSuccessAction) => action.payload),
    tap((payload) =>
      this.dialog.open(RegisterSuccessDialogComponent, {
        data: {
          user: payload.user,
        },
      })
    )
  );
}
