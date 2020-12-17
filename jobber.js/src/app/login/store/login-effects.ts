import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { LoginService } from "../login.service";
import { login, loginFailure, loginSuccess } from "./actions";
@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap((action) => {
        return this.loginService.getToken(action).pipe(
          map((token) => loginSuccess(token)),
          catchError((error) => of(loginFailure({ error: error.error.detail })))
        );
      })
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          this.router.navigate(["/"]);
        })
      );
    },
    { dispatch: false }
  );
}
