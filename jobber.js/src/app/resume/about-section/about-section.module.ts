import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutSectionContainerComponent } from "./about-section-container.component";
import { AboutSectionComponent } from "./about-section.component";
import { MaterialModule } from "../../shared/material.module";
import { FormsModule } from "@angular/forms";
import { A11yModule } from "@angular/cdk/a11y";
import { ResumeSectionModule } from "../resume-section/resume-section.module";

@NgModule({
  declarations: [AboutSectionContainerComponent, AboutSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    A11yModule,
    ResumeSectionModule,
  ],
  exports: [AboutSectionContainerComponent],
})
export class AboutSectionModule {}
