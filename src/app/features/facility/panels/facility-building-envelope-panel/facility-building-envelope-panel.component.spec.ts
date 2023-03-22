import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityBuildingEnvelopePanelComponent } from './facility-building-envelope-panel.component';

describe('FacilityBuildingEnvelopePanelComponent', () => {
  let component: FacilityBuildingEnvelopePanelComponent;
  let fixture: ComponentFixture<FacilityBuildingEnvelopePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityBuildingEnvelopePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityBuildingEnvelopePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
