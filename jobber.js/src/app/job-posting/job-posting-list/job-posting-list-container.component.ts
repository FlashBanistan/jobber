import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/state/state";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-job-posting-list-container",
  template: `
    <app-job-posting-list
      [jobPostings]="jobPostings$ | async"
    ></app-job-posting-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobPostingListContainerComponent implements OnInit {
  jobPostings$ = this.route.data;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {}
}
