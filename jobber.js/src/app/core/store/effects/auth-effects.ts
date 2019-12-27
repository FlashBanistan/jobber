import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as authActions from '../actions/auth-actions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../services';
import { RegisterSuccessDialogComponent } from '../../components/register-success-dialog/register-success-dialog.component';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthenticationService,
    private actions$: Actions,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<authActions.LoginRequestAction>(authActions.ActionTypes.LOGIN_REQUEST),
    switchMap(action =>
      this.authService.getToken(action.payload).pipe(
        map(
          token =>
            new authActions.LoginSuccessAction({
              token,
            }),
        ),
        catchError(error => of(new authActions.LoginFailureAction({ error: error.error.detail }))),
      ),
    ),
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<authActions.LoginSuccessAction>(authActions.ActionTypes.LOGIN_SUCCESS),
    tap(() => this.router.navigate(['/'])),
  );

  @Effect()
  registerRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<authActions.RegisterRequestAction>(authActions.ActionTypes.REGISTER_REQUEST),
    switchMap(action =>
      this.authService.registerNewUser(action.payload).pipe(
        map(user => new authActions.RegisterSuccessAction({ user })),
        catchError(error =>
          of(new authActions.RegisterFailureAction({ error: error.error.email[0] })),
        ),
      ),
    ),
  );

  @Effect({ dispatch: false })
  registerSuccess$ = this.actions$.pipe(
    ofType<authActions.RegisterSuccessAction>(authActions.ActionTypes.REGISTER_SUCCESS),
    map((action: authActions.RegisterSuccessAction) => action.payload),
    tap(payload =>
      this.dialog.open(RegisterSuccessDialogComponent, {
        data: {
          user: payload.user,
        },
      }),
    ),
  );
}
