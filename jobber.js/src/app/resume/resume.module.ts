import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResumeRoutingModule } from "./resume-routing.module";
import { ResumeLayoutComponent } from "./resume-layout/resume-layout.component";
import { MaterialModule } from "../shared/material.module";

@NgModule({
  declarations: [ResumeLayoutComponent],
  imports: [CommonModule, MaterialModule, ResumeRoutingModule],
  providers: [],
})
export class ResumeModule {}
