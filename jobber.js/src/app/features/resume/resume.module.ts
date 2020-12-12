import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeLayoutComponent } from './resume-layout/resume-layout.component';

@NgModule({
  declarations: [
    ResumeLayoutComponent,
  ],
  imports: [SharedModule, ResumeRoutingModule],
  providers: [],
})
export class ResumeModule {}
