import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable, of } from "rxjs";
import { Work } from "../interfaces/work.interface";

@Component({
  selector: "app-work-experience-container",
  template: `
    <app-work-experience
      [workExperience]="workExperience$ | async"
    ></app-work-experience>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceContainerComponent {
  workExperience$: Observable<Work[]>;
  constructor() {
    this.workExperience$ = of<Work[]>([
      {
        id: 1,
        resume: 1,
        company: "Company",
        position: "President",
        website: "http://company.com",
        startDate: "2013-01-01",
        endDate: "2014-01-01",
        summary: "Description...",
        highlights: ["Started the company"],
      },
      {
        id: 2,
        resume: 1,
        company: "Pied Piper",
        position: "CEO/President",
        website: "http://company.com",
        startDate: "2015-02-05",
        endDate: "2018-07-10",
        summary: `Pied Piper is a multi-platform technology based on a proprietary universal
        compression algorithm that has consistently fielded high Weisman Scores™
        that are not merely competitive, but approach the theoretical limit of
        lossless compression.`,
        highlights: [
          "Build an algorithm for artist to detect if their music was violating copy right infringement laws",
          "Successfully won Techcrunch Disrupt",
          "Optimized an algorithm that holds the current world record for Weisman Scores",
        ],
      },
    ]);
  }
}
