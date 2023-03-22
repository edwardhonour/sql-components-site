import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuPanelComponent } from './top-menu-panel.component';

describe('TopMenuPanelComponent', () => {
  let component: TopMenuPanelComponent;
  let fixture: ComponentFixture<TopMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopMenuPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
