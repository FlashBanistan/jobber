import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { JobPosting } from "../job-posting";

@Component({
  selector: "app-job-posting-list",
  templateUrl: "./job-posting-list.component.html",
  styleUrls: ["./job-posting-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobPostingListComponent implements OnInit {
  @Input() jobPostings: JobPosting[];
  constructor() {}

  ngOnInit() {}
}
