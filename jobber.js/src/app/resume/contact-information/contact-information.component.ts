import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
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
  @Input() summary: string;
  @Input() location: ResumeLocation;
  @Input() profiles: OnlineProfile[];
}
