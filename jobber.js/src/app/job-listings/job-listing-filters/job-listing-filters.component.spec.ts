import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { JobListingFiltersComponent } from "./job-listing-filters.component";

describe("JobListingFiltersComponent", () => {
  let component: JobListingFiltersComponent;
  let fixture: ComponentFixture<JobListingFiltersComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [JobListingFiltersComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListingFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
