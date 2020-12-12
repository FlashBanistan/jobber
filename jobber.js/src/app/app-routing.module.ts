import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingContainerComponent } from "./core/components/landing/landing-container.component";

const routes: Routes = [
  {
    path: "",
    component: LandingContainerComponent,
  },
  {
    path: "account/login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "account/register",
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterModule),
  },
  {
    path: "jobs",
    loadChildren: () =>
      import("./features/job-posting/job-posting.module").then(
        (m) => m.JobPostingModule
      ),
  },
  {
    path: "resume",
    loadChildren: () =>
      import("./features/resume/resume.module").then((m) => m.ResumeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
