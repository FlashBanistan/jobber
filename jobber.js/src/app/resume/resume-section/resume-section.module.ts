import { NgModule } from "@angular/core";
import { ResumeSectionContentComponent } from "./resume-section-content/resume-section-content.component";
import { ResumeSectionHeaderComponent } from "./resume-section-header/resume-section-header.component";
import { ResumeSectionIconComponent } from "./resume-section-icon/resume-section-icon.component";
import { ResumeSectionComponent } from "./resume-section/resume-section.component";

@NgModule({
  declarations: [
    ResumeSectionComponent,
    ResumeSectionHeaderComponent,
    ResumeSectionIconComponent,
    ResumeSectionContentComponent,
  ],
  exports: [
    ResumeSectionComponent,
    ResumeSectionHeaderComponent,
    ResumeSectionIconComponent,
    ResumeSectionContentComponent,
  ],
})
export class ResumeSectionModule {}
