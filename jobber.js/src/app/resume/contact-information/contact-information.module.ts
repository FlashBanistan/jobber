import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/shared/material.module";
import { ContactInformationContainerComponent } from "./contact-information-container.component";
import { ContactInformationComponent } from "./contact-information.component";

@NgModule({
  declarations: [
    ContactInformationContainerComponent,
    ContactInformationComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [ContactInformationContainerComponent],
})
export class ContactInformationModule {}
