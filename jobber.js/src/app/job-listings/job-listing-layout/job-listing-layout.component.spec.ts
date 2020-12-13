import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { JobListingLayoutComponent } from "./job-listing-layout.component";

describe("JobListingLayoutComponent", () => {
  let component: JobListingLayoutComponent;
  let fixture: ComponentFixture<JobListingLayoutComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [JobListingLayoutComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
