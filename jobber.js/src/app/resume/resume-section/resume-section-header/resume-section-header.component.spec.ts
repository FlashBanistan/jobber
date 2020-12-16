import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSectionHeaderComponent } from './resume-section-header.component';

describe('ResumeSectionHeaderComponent', () => {
  let component: ResumeSectionHeaderComponent;
  let fixture: ComponentFixture<ResumeSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeSectionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
