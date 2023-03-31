import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarProductoFormComponent } from './ingresar-producto-form.component';

describe('IngresarProductoFormComponent', () => {
  let component: IngresarProductoFormComponent;
  let fixture: ComponentFixture<IngresarProductoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarProductoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarProductoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
