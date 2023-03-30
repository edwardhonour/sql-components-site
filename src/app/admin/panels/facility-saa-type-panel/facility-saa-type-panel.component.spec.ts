import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySaaTypePanelComponent } from './facility-saa-type-panel.component';

describe('FacilitySaaTypePanelComponent', () => {
  let component: FacilitySaaTypePanelComponent;
  let fixture: ComponentFixture<FacilitySaaTypePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FacilitySaaTypePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitySaaTypePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
