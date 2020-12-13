import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { JobListing } from "../job-listing";

@Component({
  selector: "app-job-listing-list",
  templateUrl: "./job-listing-list.component.html",
  styleUrls: ["./job-listing-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListingListComponent implements OnInit {
  @Input() jobListings: JobListing[];
  constructor() {}

  ngOnInit() {}
}
