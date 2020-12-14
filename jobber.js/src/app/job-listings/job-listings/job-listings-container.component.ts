import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/state/state";
import { Observable } from "rxjs";
import { JobListing } from "../job-listing";
import { selectJobListings } from "../store/job-listing-selectors";
import { SelectJobListing } from "../store/job-listing-actions";

@Component({
  selector: "app-job-listings-container",
  template: `
    <app-job-listings
      [jobListings]="jobListings$ | async"
      (selectJobListing)="selectJobListing($event)"
    ></app-job-listings>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListingsContainerComponent {
  jobListings$: Observable<JobListing[]>;

  constructor(private store: Store<AppState>) {
    this.jobListings$ = this.store.select(selectJobListings);
  }

  selectJobListing(jobListing: JobListing) {
    this.store.dispatch(new SelectJobListing(jobListing));
  }
}
