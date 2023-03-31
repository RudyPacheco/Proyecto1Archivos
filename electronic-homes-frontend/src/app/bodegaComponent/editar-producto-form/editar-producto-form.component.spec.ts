import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductoFormComponent } from './editar-producto-form.component';

describe('EditarProductoFormComponent', () => {
  let component: EditarProductoFormComponent;
  let fixture: ComponentFixture<EditarProductoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProductoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProductoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
