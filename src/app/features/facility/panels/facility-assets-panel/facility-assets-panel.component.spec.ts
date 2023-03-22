import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityAssetsPanelComponent } from './facility-assets-panel.component';

describe('FacilityAssetsPanelComponent', () => {
  let component: FacilityAssetsPanelComponent;
  let fixture: ComponentFixture<FacilityAssetsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityAssetsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityAssetsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
