import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatTypePanelComponent } from './threat-type-panel.component';

describe('ThreatTypePanelComponent', () => {
  let component: ThreatTypePanelComponent;
  let fixture: ComponentFixture<ThreatTypePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ThreatTypePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreatTypePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
