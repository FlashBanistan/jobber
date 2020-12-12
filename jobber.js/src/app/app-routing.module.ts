import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingContainerComponent } from './core/components/landing/landing-container.component';
import { LoginContainerComponent } from './core/components/login/login-container.component';
import { RegisterContainerComponent } from './core/components/register/register-container.component';

const routes: Routes = [
  {
    path: '',
    component: LandingContainerComponent,
  },
  {
    path: 'account/login',
    component: LoginContainerComponent,
  },
  {
    path: 'account/register',
    component: RegisterContainerComponent,
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./features/job-posting/job-posting.module').then(m => m.JobPostingModule),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./features/resume/resume.module').then(m => m.ResumeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
