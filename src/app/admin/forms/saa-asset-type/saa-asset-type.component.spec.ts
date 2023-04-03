import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaaAssetTypeComponent } from './saa-asset-type.component';

describe('SaaAssetTypeComponent', () => {
  let component: SaaAssetTypeComponent;
  let fixture: ComponentFixture<SaaAssetTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SaaAssetTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaaAssetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
