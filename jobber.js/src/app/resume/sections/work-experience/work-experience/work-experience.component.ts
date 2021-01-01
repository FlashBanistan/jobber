import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Work } from "../work.interface";
import { formatDistance } from "date-fns";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent {
  formatDistance = formatDistance;
  @Input() workExperience: Work[];

  durationElapsed(startDate: string, endDate: string): string {
    return formatDistance(new Date(endDate), new Date(startDate));
  }
  constructor() {}
}
