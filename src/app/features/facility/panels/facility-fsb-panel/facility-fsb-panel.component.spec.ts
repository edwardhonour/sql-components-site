import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityFsbPanelComponent } from './facility-fsb-panel.component';

describe('FacilityFsbPanelComponent', () => {
  let component: FacilityFsbPanelComponent;
  let fixture: ComponentFixture<FacilityFsbPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityFsbPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityFsbPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
