import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { resumeReducers } from "./store/resume-reducers";
import { ResumeEffects } from "./store/resume-effects";
import { ResumeRoutingModule } from "./resume-routing.module";
import { ResumeLayoutComponent } from "./resume-layout/resume-layout.component";
import { MaterialModule } from "../shared/material.module";
import { ContactInformationModule } from "./sections/contact-information/contact-information.module";
import { SummaryModule } from "./sections/summary/summary.module";
import { WorkExperienceModule } from "./sections/work-experience/work-experience.module";

@NgModule({
  declarations: [ResumeLayoutComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature("resume", resumeReducers),
    EffectsModule.forFeature([ResumeEffects]),
    MaterialModule,
    ResumeRoutingModule,
    ContactInformationModule,
    SummaryModule,
    WorkExperienceModule,
  ],
  providers: [],
})
export class ResumeModule {}
