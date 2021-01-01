import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ResumeLanguage } from "./resume-language.interface";
import { OnlineProfile } from "./online-profile.interface";
import { ResumeLocation } from "./resume-location.interface";
import {
  saveEmail,
  saveLabel,
  saveLanguages,
  saveLocation,
  saveName,
  savePhone,
  savePicture,
  saveProfiles,
  saveWebsite,
  toggleIsEditingEmail,
  toggleIsEditingLabel,
  toggleIsEditingLocation,
  toggleIsEditingName,
  toggleIsEditingPhone,
  toggleIsEditingPicture,
  toggleIsEditingProfiles,
  toggleIsEditingWebsite,
  toggleIsEditingLanguages,
} from "../../store/actions";
import {
  selectEmail,
  selectIsEditingEmail,
  selectIsEditingLabel,
  selectIsEditingLanguages,
  selectIsEditingLocation,
  selectIsEditingName,
  selectIsEditingPhone,
  selectIsEditingPicture,
  selectIsEditingProfiles,
  selectIsEditingWebsite,
  selectLabel,
  selectLanguages,
  selectLocation,
  selectName,
  selectPhone,
  selectPicture,
  selectProfiles,
  selectWebsite,
} from "../../store/resume-selectors";
import { ResumeState } from "../../store/resume-state";

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
      [languages]="languages$ | async"
      [isEditingName]="isEditingName$ | async"
      [isEditingLabel]="isEditingLabel$ | async"
      [isEditingPicture]="isEditingPicture$ | async"
      [isEditingEmail]="isEditingEmail$ | async"
      [isEditingPhone]="isEditingPhone$ | async"
      [isEditingWebsite]="isEditingWebsite$ | async"
      [isEditingLocation]="isEditingLocation$ | async"
      [isEditingProfiles]="isEditingProfiles$ | async"
      [isEditingLanguages]="isEditingLanguages$ | async"
      (toggleIsEditingName)="toggleIsEditingName()"
      (toggleIsEditingLabel)="toggleIsEditingLabel()"
      (toggleIsEditingPicture)="toggleIsEditingPicture()"
      (toggleIsEditingEmail)="toggleIsEditingEmail()"
      (toggleIsEditingPhone)="toggleIsEditingPhone()"
      (toggleIsEditingWebsite)="toggleIsEditingWebsite()"
      (toggleIsEditingLocation)="toggleIsEditingLocation()"
      (toggleIsEditingProfiles)="toggleIsEditingProfiles()"
      (toggleIsEditingLanguages)="toggleIsEditingLanguages()"
      (saveName)="saveName($event)"
      (saveLabel)="saveLabel($event)"
      (savePicture)="savePicture($event)"
      (saveEmail)="saveEmail($event)"
      (savePhone)="savePhone($event)"
      (saveWebsite)="saveWebsite($event)"
      (saveLocation)="saveLocation($event)"
      (saveProfiles)="saveProfiles($event)"
      (saveLanguages)="saveLanguages($event)"
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
  languages$: Observable<ResumeLanguage[]>;
  isEditingName$: Observable<boolean>;
  isEditingLabel$: Observable<boolean>;
  isEditingPicture$: Observable<boolean>;
  isEditingEmail$: Observable<boolean>;
  isEditingPhone$: Observable<boolean>;
  isEditingWebsite$: Observable<boolean>;
  isEditingLocation$: Observable<boolean>;
  isEditingProfiles$: Observable<boolean>;
  isEditingLanguages$: Observable<boolean>;

  toggleIsEditingName() {
    this.store.dispatch(toggleIsEditingName());
  }

  toggleIsEditingLabel() {
    this.store.dispatch(toggleIsEditingLabel());
  }

  toggleIsEditingPicture() {
    this.store.dispatch(toggleIsEditingPicture());
  }

  toggleIsEditingEmail() {
    this.store.dispatch(toggleIsEditingEmail());
  }

  toggleIsEditingPhone() {
    this.store.dispatch(toggleIsEditingPhone());
  }

  toggleIsEditingWebsite() {
    this.store.dispatch(toggleIsEditingWebsite());
  }

  toggleIsEditingLocation() {
    this.store.dispatch(toggleIsEditingLocation());
  }

  toggleIsEditingProfiles() {
    this.store.dispatch(toggleIsEditingProfiles());
  }

  toggleIsEditingLanguages() {
    this.store.dispatch(toggleIsEditingLanguages());
  }

  saveName(name: string) {
    this.store.dispatch(saveName({ name }));
  }

  saveLabel(label: string) {
    this.store.dispatch(saveLabel({ label }));
  }

  savePicture(picture: string) {
    this.store.dispatch(savePicture({ picture }));
  }

  saveEmail(email: string) {
    this.store.dispatch(saveEmail({ email }));
  }

  savePhone(phone: string) {
    this.store.dispatch(savePhone({ phone }));
  }

  saveWebsite(website: string) {
    this.store.dispatch(saveWebsite({ website }));
  }

  saveLocation(location: ResumeLocation) {
    this.store.dispatch(saveLocation({ location }));
  }

  saveProfiles(profiles: OnlineProfile[]) {
    this.store.dispatch(saveProfiles({ profiles }));
  }

  saveLanguages(languages: ResumeLanguage[]) {
    this.store.dispatch(saveLanguages({ languages }));
  }

  constructor(private store: Store<ResumeState>) {
    this.name$ = this.store.select(selectName);
    this.label$ = this.store.select(selectLabel);
    this.picture$ = this.store.select(selectPicture);
    this.email$ = this.store.select(selectEmail);
    this.phone$ = this.store.select(selectPhone);
    this.website$ = this.store.select(selectWebsite);
    this.location$ = this.store.select(selectLocation);
    this.profiles$ = this.store.select(selectProfiles);
    this.languages$ = this.store.select(selectLanguages);
    this.isEditingName$ = this.store.select(selectIsEditingName);
    this.isEditingLabel$ = this.store.select(selectIsEditingLabel);
    this.isEditingPicture$ = this.store.select(selectIsEditingPicture);
    this.isEditingEmail$ = this.store.select(selectIsEditingEmail);
    this.isEditingPhone$ = this.store.select(selectIsEditingPhone);
    this.isEditingWebsite$ = this.store.select(selectIsEditingWebsite);
    this.isEditingLocation$ = this.store.select(selectIsEditingLocation);
    this.isEditingProfiles$ = this.store.select(selectIsEditingProfiles);
    this.isEditingLanguages$ = this.store.select(selectIsEditingLanguages);
  }
}
