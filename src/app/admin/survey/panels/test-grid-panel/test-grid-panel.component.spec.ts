import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGridPanelComponent } from './test-grid-panel.component';

describe('TestGridPanelComponent', () => {
  let component: TestGridPanelComponent;
  let fixture: ComponentFixture<TestGridPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestGridPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestGridPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
