import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-job-listing-filters",
  templateUrl: "./job-listing-filters.component.html",
  styleUrls: ["./job-listing-filters.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListingFiltersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
