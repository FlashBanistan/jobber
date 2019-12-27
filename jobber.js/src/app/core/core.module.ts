import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { environment } from '../../environments/environment';
import { LandingContainerComponent } from './components/landing/landing-container.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginContainerComponent } from './components/login/login-container.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterContainerComponent } from './components/register/register-container.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSuccessDialogComponent } from './components';
import { AuthEffects } from './store/effects/auth-effects';
import { appReducers } from './store/reducers/reducers';
import { JobSearchEffects } from './store/effects/job-search-effects';

@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginComponent,
    RegisterContainerComponent,
    RegisterComponent,
    RegisterSuccessDialogComponent,
    LandingContainerComponent,
    LandingComponent,
  ],
  imports: [
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects, JobSearchEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    SharedModule,
  ],
  exports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  entryComponents: [RegisterSuccessDialogComponent],
  providers: [],
})
export class CoreModule {}
