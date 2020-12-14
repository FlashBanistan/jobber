import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/state/state";
import { JobListing } from "../job-listing";
import { selectSelectedJobListing } from "../store/job-listing-selectors";

@Component({
  selector: "app-job-listing-detail-container",
  template: `
    <app-job-listing-detail
      [jobListing]="jobListing$ | async"
    ></app-job-listing-detail>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListingDetailContainerComponent {
  jobListing$: Observable<JobListing>;

  constructor(private store: Store<AppState>) {
    this.jobListing$ = this.store.select(selectSelectedJobListing);
  }
}
