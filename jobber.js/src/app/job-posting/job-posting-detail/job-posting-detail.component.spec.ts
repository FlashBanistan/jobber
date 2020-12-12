import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobPostingDetailComponent } from './job-posting-detail.component';

describe('JobPostingDetailComponent', () => {
  let component: JobPostingDetailComponent;
  let fixture: ComponentFixture<JobPostingDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});