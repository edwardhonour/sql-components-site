import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityEntryControlsPanelComponent } from './facility-entry-controls-panel.component';

describe('FacilityEntryControlsPanelComponent', () => {
  let component: FacilityEntryControlsPanelComponent;
  let fixture: ComponentFixture<FacilityEntryControlsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityEntryControlsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityEntryControlsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
