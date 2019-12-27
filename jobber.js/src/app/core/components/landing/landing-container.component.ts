import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/state';
import { selectIsMobile } from '../../store/selectors/layout-selectors';

@Component({
  selector: 'app-landing-container',
  template: `
    <app-landing
      [recentSearches]="recentSearches"
      [isMobileView]="isMobileView$ | async"
    ></app-landing>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingContainerComponent implements OnInit {
  isMobileView$ = this.store.select(selectIsMobile);
  recentSearches = ['Web Developer', 'Engineer', 'Scientist', '84065', 'Salt Lake City'];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
