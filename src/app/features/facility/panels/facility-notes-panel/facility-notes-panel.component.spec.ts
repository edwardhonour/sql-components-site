import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityNotesPanelComponent } from './facility-notes-panel.component';

describe('FacilityNotesPanelComponent', () => {
  let component: FacilityNotesPanelComponent;
  let fixture: ComponentFixture<FacilityNotesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityNotesPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityNotesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
