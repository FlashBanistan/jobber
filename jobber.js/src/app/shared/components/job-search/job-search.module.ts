import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MaterialModule } from "../../material.module";
import { JobSearchContainerComponent } from "./job-search-container.component";
import { JobSearchComponent } from "./job-search.component";
import { jobSearchReducers } from "./store/job-search-reducers";
import { JobSearchEffects } from "./store/job-search-effects";

@NgModule({
  declarations: [JobSearchContainerComponent, JobSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature("jobSearch", jobSearchReducers),
    EffectsModule.forFeature([JobSearchEffects]),
    MaterialModule,
  ],
  exports: [JobSearchContainerComponent],
})
export class JobSearchModule {}
