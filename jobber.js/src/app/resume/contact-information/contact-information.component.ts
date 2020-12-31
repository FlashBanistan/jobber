import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { FluencyLevel, getFluencyOptions } from "../enums/fluency-level.enum";
import { getResumeLanguageOptions, Language } from "../enums/language.enum";
import {
  getResumeLanguage,
  ResumeLanguage,
} from "../interfaces/resume-language.interface";
import { OnlineProfile } from "../interfaces/online-profile.interface";
import { ResumeLocation } from "../interfaces/resume-location.interface";

@Component({
  selector: "app-contact-information",
  templateUrl: "./contact-information.component.html",
  styleUrls: ["./contact-information.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInformationComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() picture: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() website: string;
  @Input() location: ResumeLocation;
  @Input() profiles: OnlineProfile[];
  @Input() languages: ResumeLanguage[];

  @Input() isEditingName: boolean;
  @Input() isEditingLabel: boolean;
  @Input() isEditingPicture: boolean;
  @Input() isEditingEmail: boolean;
  @Input() isEditingPhone: boolean;
  @Input() isEditingWebsite: boolean;
  @Input() isEditingLocation: boolean;
  @Input() isEditingProfiles: boolean;
  @Input() isEditingLanguages: boolean;

  @Output() toggleIsEditingName = new EventEmitter();
  @Output() toggleIsEditingLabel = new EventEmitter();
  @Output() toggleIsEditingPicture = new EventEmitter();
  @Output() toggleIsEditingEmail = new EventEmitter();
  @Output() toggleIsEditingPhone = new EventEmitter();
  @Output() toggleIsEditingWebsite = new EventEmitter();
  @Output() toggleIsEditingLocation = new EventEmitter();
  @Output() toggleIsEditingProfiles = new EventEmitter();
  @Output() toggleIsEditingLanguages = new EventEmitter();

  @Output() saveName = new EventEmitter<string>();
  @Output() saveLabel = new EventEmitter<string>();
  @Output() savePicture = new EventEmitter<string>();
  @Output() saveEmail = new EventEmitter<string>();
  @Output() savePhone = new EventEmitter<string>();
  @Output() saveWebsite = new EventEmitter<string>();
  @Output() saveLocation = new EventEmitter<ResumeLocation>();
  @Output() saveProfiles = new EventEmitter<OnlineProfile[]>();
  @Output() saveLanguages = new EventEmitter<ResumeLanguage[]>();

  languageOptions: Language[] = getResumeLanguageOptions();
  fluencyOptions: FluencyLevel[] = getFluencyOptions();

  deleteLanguage(index: number) {
    if (this.languages.length < 2) {
      return;
    }
    this.languages.splice(index, 1);
  }

  addLanguage() {
    this.languages.push(getResumeLanguage());
  }
}
