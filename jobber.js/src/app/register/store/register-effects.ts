import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import * as registerActions from "./register-actions";
import { MatDialog } from "@angular/material/dialog";
import { RegisterService } from "../register.service";
import { RegisterSuccessDialogComponent } from "../register-success-dialog/register-success-dialog.component";

@Injectable()
export class RegisterEffects {
  constructor(
    private registerService: RegisterService,
    private actions$: Actions,
    private dialog: MatDialog
  ) {}

  @Effect()
  registerRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<registerActions.RegisterRequestAction>(
      registerActions.RegisterActionTypes.REGISTER_REQUEST
    ),
    switchMap((action) =>
      this.registerService.registerNewUser(action.payload).pipe(
        map((user) => new registerActions.RegisterSuccessAction({ user })),
        catchError((error) =>
          of(
            new registerActions.RegisterFailureAction({
              error: error.error.email[0],
            })
          )
        )
      )
    )
  );

  @Effect({ dispatch: false })
  registerSuccess$ = this.actions$.pipe(
    ofType<registerActions.RegisterSuccessAction>(
      registerActions.RegisterActionTypes.REGISTER_SUCCESS
    ),
    map((action: registerActions.RegisterSuccessAction) => action.payload),
    tap((payload) =>
      this.dialog.open(RegisterSuccessDialogComponent, {
        data: {
          user: payload.user,
        },
      })
    )
  );
}
