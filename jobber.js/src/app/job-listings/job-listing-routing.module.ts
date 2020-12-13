import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobListingLayoutComponent } from "./job-listing-layout/job-listing-layout.component";
import { JobResolver } from "./job-resolver";

const routes: Routes = [
  {
    path: "",
    component: JobListingLayoutComponent,
    resolve: { jobs: JobResolver },
    runGuardsAndResolvers: "paramsOrQueryParamsChange",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobListingRoutingModule {}
