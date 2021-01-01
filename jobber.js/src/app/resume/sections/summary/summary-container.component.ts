import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { saveSummary, toggleIsEditingSummary } from "../../store/actions";
import {
  selectIsEditingSummary,
  selectSummary,
} from "../../store/resume-selectors";
import { ResumeState } from "../../store/resume-state";

@Component({
  selector: "app-summary-container",
  template: ` <app-summary
    [summary]="summary$ | async"
    [editing]="editing$ | async"
    (toggleEditing)="toggleEditing()"
    (saveField)="saveField($event)"
  ></app-summary>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryContainerComponent {
  summary$: Observable<string>;
  editing$: Observable<boolean>;

  constructor(private store: Store<ResumeState>) {
    this.summary$ = this.store.select(selectSummary);
    this.editing$ = this.store.select(selectIsEditingSummary);
  }

  toggleEditing() {
    this.store.dispatch(toggleIsEditingSummary());
  }

  saveField(summary: string) {
    this.store.dispatch(saveSummary({ summary }));
  }
}
