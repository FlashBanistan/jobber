import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { SharedModule } from "src/app/shared/shared.module";
import { JobListingRoutingModule } from "./job-listing-routing.module";
import { jobListingReducers } from "./store/job-listing-reducers";
import { JobListingEffects } from "./store/job-listing-effects";
import { JobListingLayoutComponent } from "./job-listing-layout/job-listing-layout.component";
import { JobListingsContainerComponent } from "./job-listings/job-listings-container.component";
import { JobListingsComponent } from "./job-listings/job-listings.component";
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
    JobListingsContainerComponent,
    JobListingsComponent,
    JobListingFiltersContainerComponent,
    JobListingFiltersComponent,
    JobListingDetailContainerComponent,
    JobListingDetailComponent,
  ],
  imports: [
    StoreModule.forFeature("jobListings", jobListingReducers),
    EffectsModule.forFeature([JobListingEffects]),
    SharedModule,
    MaterialModule,
    JobListingRoutingModule,
    JobSearchModule,
  ],
  providers: [JobResolver],
})
export class JobListingModule {}
