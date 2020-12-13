import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/state/state";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-job-listing-list-container",
  template: `
    <app-job-listing-list
      [jobListings]="jobListings$ | async"
    ></app-job-listing-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListingListContainerComponent implements OnInit {
  jobListings$ = this.route.data;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {}
}
