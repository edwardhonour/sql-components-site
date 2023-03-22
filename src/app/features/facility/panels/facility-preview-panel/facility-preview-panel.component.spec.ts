import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityPreviewPanelComponent } from './facility-preview-panel.component';

describe('FacilityPreviewPanelComponent', () => {
  let component: FacilityPreviewPanelComponent;
  let fixture: ComponentFixture<FacilityPreviewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityPreviewPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityPreviewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
