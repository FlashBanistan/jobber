import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkExperienceContainerComponent } from "./work-experience-container.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/material.module";
import { ResumeSectionModule } from "../resume-section/resume-section.module";

@NgModule({
  declarations: [WorkExperienceContainerComponent, WorkExperienceComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    // A11yModule,
    ResumeSectionModule,
  ],
  exports: [WorkExperienceContainerComponent],
})
export class WorkExperienceModule {}
