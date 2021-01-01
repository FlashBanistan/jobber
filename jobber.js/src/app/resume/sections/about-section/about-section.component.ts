import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "app-about-section",
  templateUrl: "./about-section.component.html",
  styleUrls: ["./about-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  @Input() summary: string;
  @Input() editing: boolean;
  @Output() toggleEditing = new EventEmitter();
  @Output() saveField = new EventEmitter<string>();
}
