import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySaaPanelComponent } from './facility-saa-panel.component';

describe('FacilitySaaPanelComponent', () => {
  let component: FacilitySaaPanelComponent;
  let fixture: ComponentFixture<FacilitySaaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilitySaaPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitySaaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
