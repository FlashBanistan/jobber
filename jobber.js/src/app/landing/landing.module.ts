import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared/material.module";
import { LandingContainerComponent } from "../landing/landing-container.component";
import { LandingComponent } from "../landing/landing.component";
import { SharedModule } from "../shared/shared.module";
import { JobSearchModule } from "../shared/components/job-search/job-search.module";

@NgModule({
  declarations: [LandingContainerComponent, LandingComponent],
  imports: [CommonModule, SharedModule, MaterialModule, JobSearchModule],
  exports: [],
  providers: [],
})
export class LandingModule {}
