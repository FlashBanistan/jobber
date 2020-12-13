import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import * as jobSearchActions from "./job-search-actions";
import { SuggestionService } from "../../../services/suggestion.service";

@Injectable()
export class JobSearchEffects {
  constructor(
    private suggestionService: SuggestionService,
    private actions$: Actions
  ) {}

  @Effect()
  LoctionSuggestionsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<jobSearchActions.LocationSuggestionsAction>(
      jobSearchActions.JobSearchActionTypes.LOCATION_SUGGESTIONS
    ),
    switchMap((action) =>
      this.suggestionService.getLocationSuggestions(action.payload).pipe(
        map(
          (paginatedLocationSuggestions) =>
            new jobSearchActions.LocationSuggestionsSuccessAction({
              locationSuggestions: paginatedLocationSuggestions.results,
            })
        ),
        catchError((error) =>
          of(new jobSearchActions.LocationSuggestionsFailureAction({ error }))
        )
      )
    )
  );

  @Effect()
  JobTitleSuggestionsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<jobSearchActions.JobTitleSuggestionsAction>(
      jobSearchActions.JobSearchActionTypes.JOB_TITLE_SUGGESTIONS
    ),
    switchMap((action) =>
      this.suggestionService.getJobTitleSuggestions(action.payload).pipe(
        map(
          (jobTitleSuggestions) =>
            new jobSearchActions.JobTitleSuggestionsSuccessAction({
              jobTitleSuggestions,
            })
        ),
        catchError((error) =>
          of(new jobSearchActions.JobTitleSuggestionsFailureAction({ error }))
        )
      )
    )
  );
}
