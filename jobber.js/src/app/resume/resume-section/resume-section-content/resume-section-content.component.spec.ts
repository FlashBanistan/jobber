import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSectionContentComponent } from './resume-section-content.component';

describe('ResumeSectionContentComponent', () => {
  let component: ResumeSectionContentComponent;
  let fixture: ComponentFixture<ResumeSectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeSectionContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
