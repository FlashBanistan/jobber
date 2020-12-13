import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { JobPostingRoutingModule } from "./job-posting-routing.module";
import { JobPostingLayoutComponent } from "./job-posting-layout/job-posting-layout.component";
import { JobPostingListComponent } from "./job-posting-list/job-posting-list.component";
import { JobPostingListContainerComponent } from "./job-posting-list/job-posting-list-container.component";
import { JobPostingFiltersComponent } from "./job-posting-filters/job-posting-filters.component";
import { JobPostingFiltersContainerComponent } from "./job-posting-filters/job-posting-filters-container.component";
import { JobPostingDetailComponent } from "./job-posting-detail/job-posting-detail.component";
import { JobPostingDetailContainerComponent } from "./job-posting-detail/job-posting-detail-container.component";
import { JobResolver } from "./job-resolver";
import { MaterialModule } from "../shared/material.module";
import { JobSearchModule } from "../shared/components/job-search/job-search.module";

@NgModule({
  declarations: [
    JobPostingLayoutComponent,
    JobPostingListContainerComponent,
    JobPostingListComponent,
    JobPostingFiltersContainerComponent,
    JobPostingFiltersComponent,
    JobPostingDetailContainerComponent,
    JobPostingDetailComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    JobPostingRoutingModule,
    JobSearchModule,
  ],
  providers: [JobResolver],
})
export class JobPostingModule {}
