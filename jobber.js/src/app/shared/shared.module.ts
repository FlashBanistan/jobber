import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material.module";
import { JobSearchComponent } from "./components/job-search/job-search.component";
import { JobSearchContainerComponent } from "./components/job-search/job-search-container.component";

@NgModule({
  declarations: [JobSearchContainerComponent, JobSearchComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    JobSearchContainerComponent,
    JobSearchComponent,
  ],
})
export class SharedModule {}
