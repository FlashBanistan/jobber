import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Router, ActivatedRoute } from "@angular/router";
import { map, tap } from "rxjs/operators";
import * as jobListingActions from "./job-listing-actions";

@Injectable()
export class JobListingEffects {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private actions$: Actions
  ) {}

  @Effect({ dispatch: false })
  JobSearchRequestEffect$ = this.actions$.pipe(
    ofType<jobListingActions.SearchJobsAction>(
      jobListingActions.JobListingActionTypes.SEARCH_JOBS
    ),
    map((action: jobListingActions.SearchJobsAction) => action.payload),
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
