import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { OnlineProfile } from "../interfaces/online-profile.interface";
import { ResumeLocation } from "../interfaces/resume-location.interface";
import {
  selectEmail,
  selectLabel,
  selectLocation,
  selectName,
  selectPhone,
  selectPicture,
  selectProfiles,
  selectSummary,
  selectWebsite,
} from "../store/resume-selectors";
import { ResumeState } from "../store/resume-state";

@Component({
  selector: "app-contact-information-container",
  template: `
    <app-contact-information
      [name]="name$ | async"
      [label]="label$ | async"
      [picture]="picture$ | async"
      [email]="email$ | async"
      [phone]="phone$ | async"
      [website]="website$ | async"
      [summary]="summary$ | async"
      [location]="location$ | async"
      [profiles]="profiles$ | async"
    >
    </app-contact-information>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInformationContainerComponent {
  name$: Observable<string>;
  label$: Observable<string>;
  picture$: Observable<string>;
  email$: Observable<string>;
  phone$: Observable<string>;
  website$: Observable<string>;
  summary$: Observable<string>;
  location$: Observable<ResumeLocation>;
  profiles$: Observable<OnlineProfile[]>;

  constructor(private store: Store<ResumeState>) {
    this.name$ = this.store.select(selectName);
    this.label$ = this.store.select(selectLabel);
    this.picture$ = this.store.select(selectPicture);
    this.email$ = this.store.select(selectEmail);
    this.phone$ = this.store.select(selectPhone);
    this.website$ = this.store.select(selectWebsite);
    this.summary$ = this.store.select(selectSummary);
    this.location$ = this.store.select(selectLocation);
    this.profiles$ = this.store.select(selectProfiles);
  }
}
