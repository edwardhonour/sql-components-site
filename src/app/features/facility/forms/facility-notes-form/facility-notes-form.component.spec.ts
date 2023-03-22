import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityNotesFormComponent } from './facility-notes-form.component';

describe('FacilityNotesFormComponent', () => {
  let component: FacilityNotesFormComponent;
  let fixture: ComponentFixture<FacilityNotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityNotesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityNotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
