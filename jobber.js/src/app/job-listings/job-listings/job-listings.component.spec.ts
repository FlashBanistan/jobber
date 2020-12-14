import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { JobListingsComponent } from "./job-listings.component";

describe("JobListingListComponent", () => {
  let component: JobListingsComponent;
  let fixture: ComponentFixture<JobListingsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [JobListingsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
