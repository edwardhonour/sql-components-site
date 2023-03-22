import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDisplayPanelComponent } from './option-display-panel.component';

describe('OptionDisplayPanelComponent', () => {
  let component: OptionDisplayPanelComponent;
  let fixture: ComponentFixture<OptionDisplayPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OptionDisplayPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionDisplayPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
