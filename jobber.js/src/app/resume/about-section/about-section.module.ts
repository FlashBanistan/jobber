import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutSectionContainerComponent } from "./about-section-container.component";
import { AboutSectionComponent } from "./about-section.component";
import { MaterialModule } from "../../shared/material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AboutSectionContainerComponent, AboutSectionComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [AboutSectionContainerComponent],
})
export class AboutSectionModule {}
