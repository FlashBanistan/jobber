import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSectionIconComponent } from './resume-section-icon.component';

describe('ResumeSectionIconComponent', () => {
  let component: ResumeSectionIconComponent;
  let fixture: ComponentFixture<ResumeSectionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeSectionIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSectionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
