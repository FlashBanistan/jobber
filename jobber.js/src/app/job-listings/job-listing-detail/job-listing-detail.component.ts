import { Component, Input } from "@angular/core";
import { JobListing } from "../job-listing";

@Component({
  selector: "app-job-listing-detail",
  templateUrl: "./job-listing-detail.component.html",
  styleUrls: ["./job-listing-detail.component.scss"],
})
export class JobListingDetailComponent {
  @Input() jobListing: JobListing;
}
