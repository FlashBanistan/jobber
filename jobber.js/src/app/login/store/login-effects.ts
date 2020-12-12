import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import * as loginActions from "./login-actions";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";

@Injectable()
export class LoginEffects {
  constructor(
    private loginService: LoginService,
    private actions$: Actions,
    private router: Router
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
}
