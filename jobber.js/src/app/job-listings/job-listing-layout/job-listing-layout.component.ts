import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/state/state";
import {
  selectIsMobile,
  selectSidenavOpened,
  selectSidenavMode,
  selectIsJobDetailView,
} from "../../store/selectors/layout-selectors";

@Component({
  selector: "app-job-listing-layout",
  templateUrl: "./job-listing-layout.component.html",
  styleUrls: ["./job-listing-layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListingLayoutComponent implements OnInit {
  isMobileView$ = this.store.select(selectIsMobile);
  drawerOpened$ = this.store.select(selectSidenavOpened);
  drawerMode$ = this.store.select(selectSidenavMode);
  isJobDetailView = this.store.select(selectIsJobDetailView);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
