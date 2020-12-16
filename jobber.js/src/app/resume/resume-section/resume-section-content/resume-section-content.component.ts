import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resume-section-content",
  templateUrl: "./resume-section-content.component.html",
  styleUrls: ["./resume-section-content.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeSectionContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
