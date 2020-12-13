import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-job-listing-detail-container",
  template: ` <app-job-listing-detail></app-job-listing-detail> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListingDetailContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
