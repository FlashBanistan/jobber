import { Component, Input, OnInit } from "@angular/core";
import { Resume } from "../interfaces/resume.interface";

@Component({
  selector: "app-contact-information",
  templateUrl: "./contact-information.component.html",
  styleUrls: ["./contact-information.component.scss"],
})
export class ContactInformationComponent implements OnInit {
  @Input() resume: Resume;

  constructor() {}

  ngOnInit() {}
}
