import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatTypeFormComponent } from './threat-type-form.component';

describe('ThreatTypeFormComponent', () => {
  let component: ThreatTypeFormComponent;
  let fixture: ComponentFixture<ThreatTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ThreatTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreatTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
