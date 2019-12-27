import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  @Input() recentSearches: string[];
  @Input() isMobileView: boolean;

  constructor() {}

  ngOnInit() {}
}
