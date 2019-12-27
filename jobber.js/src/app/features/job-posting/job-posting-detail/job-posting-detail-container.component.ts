import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-job-posting-detail-container',
  template: `
    <app-job-posting-detail></app-job-posting-detail>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobPostingDetailContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
