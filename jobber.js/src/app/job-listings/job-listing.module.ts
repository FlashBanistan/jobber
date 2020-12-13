import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { JobListingRoutingModule } from "./job-listing-routing.module";
import { JobListingLayoutComponent } from "./job-listing-layout/job-listing-layout.component";
import { JobListingListComponent } from "./job-listing-list/job-listing-list.component";
import { JobListingListContainerComponent } from "./job-listing-list/job-listing-list-container.component";
import { JobListingFiltersComponent } from "./job-listing-filters/job-listing-filters.component";
import { JobListingFiltersContainerComponent } from "./job-listing-filters/job-listing-filters-container.component";
import { JobListingDetailComponent } from "./job-listing-detail/job-listing-detail.component";
import { JobListingDetailContainerComponent } from "./job-listing-detail/job-listing-detail-container.component";
import { JobResolver } from "./job-resolver";
import { MaterialModule } from "../shared/material.module";
import { JobSearchModule } from "../shared/components/job-search/job-search.module";

@NgModule({
  declarations: [
    JobListingLayoutComponent,
    JobListingListContainerComponent,
    JobListingListComponent,
    JobListingFiltersContainerComponent,
    JobListingFiltersComponent,
    JobListingDetailContainerComponent,
    JobListingDetailComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    JobListingRoutingModule,
    JobSearchModule,
  ],
  providers: [JobResolver],
})
export class JobListingModule {}
