import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { JobListing } from "../job-listing";

@Component({
  selector: "app-job-listings",
  templateUrl: "./job-listings.component.html",
  styleUrls: ["./job-listings.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListingsComponent {
  @Input() jobListings: JobListing[];
  @Output() selectJobListing = new EventEmitter<JobListing>();
}
