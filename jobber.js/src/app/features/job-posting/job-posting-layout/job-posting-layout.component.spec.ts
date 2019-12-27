import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingLayoutComponent } from './job-posting-layout.component';

describe('JobPostingLayoutComponent', () => {
  let component: JobPostingLayoutComponent;
  let fixture: ComponentFixture<JobPostingLayoutComponent>;

  beforeEach(async(() => {
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
