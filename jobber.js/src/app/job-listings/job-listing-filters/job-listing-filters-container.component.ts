import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-job-listing-filters-container",
  template: ` <app-job-listing-filters></app-job-listing-filters> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListingFiltersContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
