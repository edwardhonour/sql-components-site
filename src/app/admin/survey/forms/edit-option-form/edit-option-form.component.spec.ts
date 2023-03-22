import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOptionFormComponent } from './edit-option-form.component';

describe('EditOptionFormComponent', () => {
  let component: EditOptionFormComponent;
  let fixture: ComponentFixture<EditOptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditOptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
