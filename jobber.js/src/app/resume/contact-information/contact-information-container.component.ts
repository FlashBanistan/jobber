import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { OnlineProfile } from "../interfaces/online-profile.interface";
import { ResumeLocation } from "../interfaces/resume-location.interface";
import {
  selectEmail,
  selectIsEditingEmail,
  selectIsEditingLabel,
  selectIsEditingLocation,
  selectIsEditingName,
  selectIsEditingPhone,
  selectIsEditingPicture,
  selectIsEditingProfiles,
  selectIsEditingWebsite,
  selectLabel,
  selectLocation,
  selectName,
  selectPhone,
  selectPicture,
  selectProfiles,
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
      [location]="location$ | async"
      [profiles]="profiles$ | async"
      [isEditingName]="isEditingName$ | async"
      [isEditingLabel]="isEditingLabel$ | async"
      [isEditingPicture]="isEditingPicture$ | async"
      [isEditingEmail]="isEditingEmail$ | async"
      [isEditingPhone]="isEditingPhone$ | async"
      [isEditingWebsite]="isEditingWebsite$ | async"
      [isEditingLocation]="isEditingLocation$ | async"
      [isEditingProfiles]="isEditingProfiles$ | async"
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
  location$: Observable<ResumeLocation>;
  profiles$: Observable<OnlineProfile[]>;
  isEditingName$: Observable<boolean>;
  isEditingLabel$: Observable<boolean>;
  isEditingPicture$: Observable<boolean>;
  isEditingEmail$: Observable<boolean>;
  isEditingPhone$: Observable<boolean>;
  isEditingWebsite$: Observable<boolean>;
  isEditingLocation$: Observable<boolean>;
  isEditingProfiles$: Observable<boolean>;

  constructor(private store: Store<ResumeState>) {
    this.name$ = this.store.select(selectName);
    this.label$ = this.store.select(selectLabel);
    this.picture$ = this.store.select(selectPicture);
    this.email$ = this.store.select(selectEmail);
    this.phone$ = this.store.select(selectPhone);
    this.website$ = this.store.select(selectWebsite);
    this.location$ = this.store.select(selectLocation);
    this.profiles$ = this.store.select(selectProfiles);
    this.isEditingName$ = this.store.select(selectIsEditingName);
    this.isEditingLabel$ = this.store.select(selectIsEditingLabel);
    this.isEditingPicture$ = this.store.select(selectIsEditingPicture);
    this.isEditingEmail$ = this.store.select(selectIsEditingEmail);
    this.isEditingPhone$ = this.store.select(selectIsEditingPhone);
    this.isEditingWebsite$ = this.store.select(selectIsEditingWebsite);
    this.isEditingLocation$ = this.store.select(selectIsEditingLocation);
    this.isEditingProfiles$ = this.store.select(selectIsEditingProfiles);
  }
}
