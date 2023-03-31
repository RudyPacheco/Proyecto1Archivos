import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoMasIngresoReporteComponent } from './producto-mas-ingreso-reporte.component';

describe('ProductoMasIngresoReporteComponent', () => {
  let component: ProductoMasIngresoReporteComponent;
  let fixture: ComponentFixture<ProductoMasIngresoReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoMasIngresoReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoMasIngresoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
