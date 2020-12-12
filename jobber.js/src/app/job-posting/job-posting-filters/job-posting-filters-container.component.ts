import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-job-posting-filters-container',
  template: `
    <app-job-posting-filters></app-job-posting-filters>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobPostingFiltersContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
