import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state/state';
import {
  selectIsMobile,
  selectSidenavOpened,
  selectSidenavMode,
  selectIsJobDetailView,
} from 'src/app/core/store/selectors/layout-selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-posting-layout',
  templateUrl: './job-posting-layout.component.html',
  styleUrls: ['./job-posting-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobPostingLayoutComponent implements OnInit {
  isMobileView$ = this.store.select(selectIsMobile);
  drawerOpened$ = this.store.select(selectSidenavOpened);
  drawerMode$ = this.store.select(selectSidenavMode);
  isJobDetailView = this.store.select(selectIsJobDetailView);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
