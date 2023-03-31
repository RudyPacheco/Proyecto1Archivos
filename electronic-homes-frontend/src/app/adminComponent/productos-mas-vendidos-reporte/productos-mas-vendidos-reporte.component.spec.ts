import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMasVendidosReporteComponent } from './productos-mas-vendidos-reporte.component';

describe('ProductosMasVendidosReporteComponent', () => {
  let component: ProductosMasVendidosReporteComponent;
  let fixture: ComponentFixture<ProductosMasVendidosReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosMasVendidosReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosMasVendidosReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
