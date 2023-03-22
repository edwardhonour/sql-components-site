import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurveyFormComponent } from './add-survey-form.component';

describe('AddSurveyFormComponent', () => {
  let component: AddSurveyFormComponent;
  let fixture: ComponentFixture<AddSurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddSurveyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
