import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { saveSummary, toggleIsEditingSummary } from "../store/actions";
import {
  selectIsEditingSummary,
  selectSummarySection,
} from "../store/resume-selectors";
import { ResumeState } from "../store/resume-state";

@Component({
  selector: "app-about-section-container",
  template: ` <app-about-section
    [summary]="summary$ | async"
    [editing]="editing$ | async"
    (toggleEditing)="toggleEditing()"
    (saveField)="saveField($event)"
  ></app-about-section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionContainerComponent {
  summary$: Observable<string>;
  editing$: Observable<boolean>;

  constructor(private store: Store<ResumeState>) {
    this.summary$ = this.store.select(selectSummarySection);
    this.editing$ = this.store.select(selectIsEditingSummary);
  }

  toggleEditing() {
    this.store.dispatch(toggleIsEditingSummary());
  }

  saveField(summary: string) {
    this.store.dispatch(saveSummary({ summary }));
  }
}
