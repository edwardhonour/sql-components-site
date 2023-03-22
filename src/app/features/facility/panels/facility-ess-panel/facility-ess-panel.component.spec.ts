import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityEssPanelComponent } from './facility-ess-panel.component';

describe('FacilityEssPanelComponent', () => {
  let component: FacilityEssPanelComponent;
  let fixture: ComponentFixture<FacilityEssPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilityEssPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityEssPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
