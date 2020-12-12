import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobPostingFiltersComponent } from './job-posting-filters.component';

describe('JobPostingFiltersComponent', () => {
  let component: JobPostingFiltersComponent;
  let fixture: ComponentFixture<JobPostingFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostingFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
