import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Work } from "../work.interface";
import { formatDistance } from "date-fns";
import { cloneDeep } from "lodash";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent implements OnChanges {
  @Input() isEditing: boolean;
  @Input() private workExperience: Work[];
  @Output() toggleIsEditing = new EventEmitter();
  @Output() saveWorkExperience = new EventEmitter<Work[]>();

  _workExperience: Work[];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.workExperience && changes.workExperience.currentValue) {
      this._workExperience = cloneDeep(changes.workExperience.currentValue);
    }
  }

  durationElapsed(startDate: string, endDate: string): string {
    return formatDistance(new Date(endDate), new Date(startDate));
  }

  trackByFn(index: number): number {
    return index;
  }
}
