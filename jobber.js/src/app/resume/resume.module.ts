import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { resumeReducers } from "./store/resume-reducers";
import { ResumeEffects } from "./store/resume-effects";
import { ResumeRoutingModule } from "./resume-routing.module";
import { ResumeLayoutComponent } from "./resume-layout/resume-layout.component";
import { MaterialModule } from "../shared/material.module";
import { ContactInformationModule } from "./contact-information/contact-information.module";
import { ResumeSectionComponent } from "./resume-section/resume-section.component";
import { ResumeSectionHeaderComponent } from "./resume-section/resume-section-header/resume-section-header.component";
import { ResumeSectionIconComponent } from "./resume-section/resume-section-icon/resume-section-icon.component";
import { ResumeSectionContentComponent } from "./resume-section/resume-section-content/resume-section-content.component";
import { AboutSectionModule } from "./about-section/about-section.module";

@NgModule({
  declarations: [
    ResumeLayoutComponent,
    ResumeSectionComponent,
    ResumeSectionHeaderComponent,
    ResumeSectionIconComponent,
    ResumeSectionContentComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("resume", resumeReducers),
    EffectsModule.forFeature([ResumeEffects]),
    MaterialModule,
    ResumeRoutingModule,
    ContactInformationModule,
    AboutSectionModule,
  ],
  providers: [],
})
export class ResumeModule {}
