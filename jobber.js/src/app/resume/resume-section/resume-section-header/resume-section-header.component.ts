import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resume-section-header",
  templateUrl: "./resume-section-header.component.html",
  styleUrls: ["./resume-section-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeSectionHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
