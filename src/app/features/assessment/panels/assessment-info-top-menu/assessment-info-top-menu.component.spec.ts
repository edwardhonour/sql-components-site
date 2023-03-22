import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentInfoTopMenuComponent } from './assessment-info-top-menu.component';

describe('AssessmentInfoTopMenuComponent', () => {
  let component: AssessmentInfoTopMenuComponent;
  let fixture: ComponentFixture<AssessmentInfoTopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AssessmentInfoTopMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentInfoTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
