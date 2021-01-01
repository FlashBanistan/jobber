import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resume-section",
  templateUrl: "./resume-section.component.html",
  styleUrls: ["./resume-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
