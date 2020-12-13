import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
