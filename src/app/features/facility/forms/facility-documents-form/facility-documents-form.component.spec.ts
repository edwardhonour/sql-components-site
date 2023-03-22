import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDocumentsFormComponent } from './facility-documents-form.component';

describe('FacilityDocumentsFormComponent', () => {
  let component: FacilityDocumentsFormComponent;
  let fixture: ComponentFixture<FacilityDocumentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityDocumentsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDocumentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
