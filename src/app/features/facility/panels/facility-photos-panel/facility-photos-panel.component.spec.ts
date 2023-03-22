import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityPhotosPanelComponent } from './facility-photos-panel.component';

describe('FacilityPhotosPanelComponent', () => {
  let component: FacilityPhotosPanelComponent;
  let fixture: ComponentFixture<FacilityPhotosPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityPhotosPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityPhotosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
