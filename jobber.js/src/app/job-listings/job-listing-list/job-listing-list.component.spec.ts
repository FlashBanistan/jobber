import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { JobListingListComponent } from "./job-listing-list.component";

describe("JobListingListComponent", () => {
  let component: JobListingListComponent;
  let fixture: ComponentFixture<JobListingListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [JobListingListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
