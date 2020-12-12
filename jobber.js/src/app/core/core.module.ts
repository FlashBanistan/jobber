import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { SharedModule } from "../shared/shared.module";
import { environment } from "../../environments/environment";
import { LandingContainerComponent } from "./components/landing/landing-container.component";
import { LandingComponent } from "./components/landing/landing.component";
import { appReducers } from "./store/reducers/reducers";
import { JobSearchEffects } from "./store/effects/job-search-effects";
import { initialAppState } from "./store/state/state";

@NgModule({
  declarations: [LandingContainerComponent, LandingComponent],
  imports: [
    StoreModule.forRoot(appReducers, { initialState: initialAppState }),
    EffectsModule.forRoot([JobSearchEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    SharedModule,
  ],
  exports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  providers: [],
})
export class CoreModule {}
