import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Router, ActivatedRoute } from "@angular/router";
import { map, tap } from "rxjs/operators";
import * as jobPostingActions from "../actions/job-posting-actions";

@Injectable()
export class JobSearchEffects {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private actions$: Actions
  ) {}

  @Effect({ dispatch: false })
  JobSearchRequestEffect$ = this.actions$.pipe(
    ofType<jobPostingActions.SearchJobsAction>(
      jobPostingActions.JobPostingActionTypes.SEARCH_JOBS
    ),
    map((action: jobPostingActions.SearchJobsAction) => action.payload),
    tap((payload) => {
      const { jobTitle, location } = payload;
      this.router.navigate(["/jobs"], {
        relativeTo: this.route,
        queryParams: {
          jobTitle,
          ...location,
        },
        queryParamsHandling: "merge",
      });
    })
  );
}
