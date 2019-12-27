import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Location } from 'src/app/core/models';
import { FormControl } from '@angular/forms';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobSearchComponent implements OnInit, OnDestroy {
  jobTitle$ = new FormControl();
  location$ = new FormControl();
  ngUnsubscribe$ = new Subject<boolean>();
  @Input() suggestedJobTitles: string[];
  @Input() suggestedLocations: Location[];
  @Input() isMobileView: boolean;
  @Output() jobTitleValue = new EventEmitter<string>();
  @Output() locationValue = new EventEmitter<string>();
  @Output() locationSelected = new EventEmitter<Location>();
  @Output() search = new EventEmitter<{ jobTitle: string; location: string }>();

  constructor() {}

  ngOnInit() {
    this.subscribeToJobTitle();
    this.subscribeToLocation();
  }

  subscribeToJobTitle() {
    this.jobTitle$.valueChanges
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        debounceTime(400),
      )
      .subscribe(value => this.jobTitleValue.emit(value));
  }

  subscribeToLocation() {
    this.location$.valueChanges
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        debounceTime(400),
      )
      .subscribe(value => this.locationValue.emit(value));
  }

  onLocationSelected(event: MatAutocompleteSelectedEvent) {
    this.locationSelected.emit(event.option.value);
  }

  onSubmit() {
    this.search.emit({
      jobTitle: this.jobTitle$.value,
      location: this.location$.value,
    });
  }

  locationDisplayFn(location: Location) {
    return location ? location.city + ', ' + location.state : null;
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next(true);
    this.ngUnsubscribe$.complete();
  }
}
