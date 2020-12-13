import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/state/state";
import {
  selectJobTitleSuggestions,
  selectLocationSuggestions,
} from "../../../store/selectors/job-search-selectors";
import {
  JobTitleSuggestionsAction,
  LocationSuggestionsAction,
  SearchJobsAction,
  LocationSelectedAction,
} from "../../../store/actions/job-search-actions";
import { Location } from "../../interfaces/location";
import { selectIsMobile } from "../../../store/selectors/layout-selectors";
import { JobSearchCriteria } from "./job-search-criteria";

@Component({
  selector: "app-job-search-container",
  template: `
    <app-job-search
      style="width: 100%"
      [suggestedJobTitles]="suggestedJobTitles$ | async"
      [suggestedLocations]="suggestedLocations$ | async"
      [isMobileView]="isMobileView$ | async"
      (jobTitleValue)="onJobTitleValue($event)"
      (locationValue)="onLocationValue($event)"
      (locationSelected)="onLocationSelected($event)"
      (search)="onSearch($event)"
    >
    </app-job-search>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobSearchContainerComponent implements OnInit {
  suggestedJobTitles$ = this.store.select(selectJobTitleSuggestions);
  suggestedLocations$ = this.store.select(selectLocationSuggestions);
  isMobileView$ = this.store.select(selectIsMobile);

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {}

  onJobTitleValue(jobTitle: string) {
    this.store.dispatch(new JobTitleSuggestionsAction(jobTitle));
  }

  onLocationValue(location: string) {
    this.store.dispatch(new LocationSuggestionsAction(location));
  }

  onLocationSelected(location: Location) {
    this.store.dispatch(new LocationSelectedAction({ location }));
  }

  onSearch(jobSearchCriteria: JobSearchCriteria) {
    const queryParams: JobSearchCriteria = {
      jobTitle: jobSearchCriteria.jobTitle,
      location: {
        id: jobSearchCriteria.location.id,
        city: jobSearchCriteria.location.city,
        state: jobSearchCriteria.location.state,
        latitude: jobSearchCriteria.location.latitude,
        longitude: jobSearchCriteria.location.longitude,
      },
    };
    this.store.dispatch(new SearchJobsAction(queryParams));

    // this.router.navigate(['/jobs'], {
    //   queryParams: {
    //     jobTitle: searchValues.jobTitle,
    //     city: searchValues.location.city,
    //     state: searchValues.location.state,
    //     lat: searchValues.location.latitude,
    //     lon: searchValues.location.longitude,
    //   },
    // });
  }
}
