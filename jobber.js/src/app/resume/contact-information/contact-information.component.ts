import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
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

  @Input() isEditingName: boolean;
  @Input() isEditingLabel: boolean;
  @Input() isEditingPicture: boolean;
  @Input() isEditingEmail: boolean;
  @Input() isEditingPhone: boolean;
  @Input() isEditingWebsite: boolean;
  @Input() isEditingLocation: boolean;
  @Input() isEditingProfiles: boolean;

  @Output() toggleIsEditingName = new EventEmitter<boolean>();
  @Output() toggleIsEditingLabel = new EventEmitter<boolean>();
  @Output() toggleIsEditingPicture = new EventEmitter<boolean>();
  @Output() toggleIsEditingEmail = new EventEmitter<boolean>();
  @Output() toggleIsEditingPhone = new EventEmitter<boolean>();
  @Output() toggleIsEditingWebsite = new EventEmitter<boolean>();
  @Output() toggleIsEditingLocation = new EventEmitter<boolean>();
  @Output() toggleIsEditingProfiles = new EventEmitter<boolean>();

  @Output() saveName = new EventEmitter<string>();
  @Output() saveLabel = new EventEmitter<string>();
  @Output() savePicture = new EventEmitter<string>();
  @Output() saveEmail = new EventEmitter<string>();
  @Output() savePhone = new EventEmitter<string>();
  @Output() saveWebsite = new EventEmitter<string>();
  @Output() saveLocation = new EventEmitter<ResumeLocation>();
  @Output() saveProfiles = new EventEmitter<OnlineProfile[]>();
}
