import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacilityDescriptionEditorComponent } from './edit-facility-description-editor.component';

describe('EditFacilityDescriptionEditorComponent', () => {
  let component: EditFacilityDescriptionEditorComponent;
  let fixture: ComponentFixture<EditFacilityDescriptionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditFacilityDescriptionEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFacilityDescriptionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
