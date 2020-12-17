import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/state/state";
import { Resume } from "../interfaces/resume.interface";

@Component({
  selector: "app-contact-information-container",
  template: `
    <app-contact-information
      [resume]="resume$ | async"
    ></app-contact-information>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInformationContainerComponent {
  resume$: Observable<Resume>;

  constructor(private store: Store<AppState>) {
    // this.resume$ = this.store.select(selectResume);
  }
}
