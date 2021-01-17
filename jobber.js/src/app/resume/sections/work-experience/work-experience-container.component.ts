import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  selectIsEditingWork,
  selectWorkExperience,
} from "../../store/resume-selectors";
import { saveWorkExperience, toggleIsEditingWork } from "../../store/actions";
import { ResumeState } from "../../store/resume-state";
import { Work } from "./work.interface";

@Component({
  selector: "app-work-experience-container",
  template: `
    <app-work-experience
      [isEditing]="isEditing$ | async"
      [workExperience]="workExperience$ | async"
      (toggleIsEditing)="toggleIsEditing()"
      (saveWorkExperience)="saveWorkExperience($event)"
    ></app-work-experience>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceContainerComponent {
  isEditing$: Observable<boolean>;
  workExperience$: Observable<Work[]>;

  constructor(private store: Store<ResumeState>) {
    this.isEditing$ = this.store.select(selectIsEditingWork);
    this.workExperience$ = this.store.select(selectWorkExperience);
  }

  toggleIsEditing() {
    this.store.dispatch(toggleIsEditingWork());
  }

  saveWorkExperience(workExperience: Work[]) {
    this.store.dispatch(saveWorkExperience({ workExperience }));
  }
}
