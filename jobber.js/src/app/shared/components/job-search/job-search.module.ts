import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../material.module";
import { JobSearchContainerComponent } from "./job-search-container.component";
import { JobSearchComponent } from "./job-search.component";

@NgModule({
  declarations: [JobSearchContainerComponent, JobSearchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [JobSearchContainerComponent],
})
export class JobSearchModule {}
