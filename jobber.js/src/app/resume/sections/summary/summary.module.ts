import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SummaryContainerComponent } from "./summary-container.component";
import { SummaryComponent } from "./summary.component";
import { MaterialModule } from "../../../shared/material.module";
import { FormsModule } from "@angular/forms";
import { A11yModule } from "@angular/cdk/a11y";
import { ResumeSectionModule } from "../../resume-section/resume-section.module";

@NgModule({
  declarations: [SummaryContainerComponent, SummaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    A11yModule,
    ResumeSectionModule,
  ],
  exports: [SummaryContainerComponent],
})
export class SummaryModule {}
