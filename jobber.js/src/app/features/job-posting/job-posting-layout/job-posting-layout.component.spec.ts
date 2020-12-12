import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobPostingLayoutComponent } from './job-posting-layout.component';

describe('JobPostingLayoutComponent', () => {
  let component: JobPostingLayoutComponent;
  let fixture: ComponentFixture<JobPostingLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
