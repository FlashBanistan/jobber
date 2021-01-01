import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { A11yModule } from "@angular/cdk/a11y";
import { ClickOutsideModule } from "ng-click-outside";
import { MaterialModule } from "src/app/shared/material.module";
import { ContactInformationContainerComponent } from "./contact-information-container.component";
import { ContactInformationComponent } from "./contact-information.component";
import { PipesModule } from "src/app/shared/pipes/pipes.module";

@NgModule({
  declarations: [
    ContactInformationContainerComponent,
    ContactInformationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    A11yModule,
    ClickOutsideModule,
    MaterialModule,
    PipesModule,
  ],
  exports: [ContactInformationContainerComponent],
})
export class ContactInformationModule {}
