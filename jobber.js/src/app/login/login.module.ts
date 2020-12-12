import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginContainerComponent } from "./login-container.component";
import { LoginComponent } from "./login.component";
import { MaterialModule } from "../shared/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { StoreModule } from "@ngrx/store";
import { loginReducers } from "./store/login-reducers";
import { EffectsModule } from "@ngrx/effects";
import { LoginEffects } from "./store/login-effects";

@NgModule({
  declarations: [LoginContainerComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature("login", loginReducers),
    EffectsModule.forFeature([LoginEffects]),
    MaterialModule,
    LoginRoutingModule,
  ],
})
export class LoginModule {}
