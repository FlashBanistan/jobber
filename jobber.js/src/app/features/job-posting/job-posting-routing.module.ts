import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobPostingLayoutComponent } from './job-posting-layout/job-posting-layout.component';
import { JobResolver } from './job-resolver';

const routes: Routes = [
  {
    path: '',
    component: JobPostingLayoutComponent,
    resolve: { jobs: JobResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPostingRoutingModule {}
