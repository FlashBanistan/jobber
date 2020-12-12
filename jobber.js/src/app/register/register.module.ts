import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MaterialModule } from "../shared/material.module";
import { RegisterContainerComponent } from "./register-container.component";
import { RegisterComponent } from "./register.component";
import { RegisterSuccessDialogComponent } from "./register-success-dialog/register-success-dialog.component";
import { RegisterRoutingModule } from "./register-routing.module";
import { registerReducers } from "./store/register-reducers";
import { RegisterEffects } from "./store/register-effects";

@NgModule({
  declarations: [
    RegisterContainerComponent,
    RegisterComponent,
    RegisterSuccessDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature("register", registerReducers),
    EffectsModule.forFeature([RegisterEffects]),
    MaterialModule,
    RegisterRoutingModule,
  ],
})
export class RegisterModule {}
