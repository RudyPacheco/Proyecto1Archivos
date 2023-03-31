import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalMasVentasReporteComponent } from './sucursal-mas-ventas-reporte.component';

describe('SucursalMasVentasReporteComponent', () => {
  let component: SucursalMasVentasReporteComponent;
  let fixture: ComponentFixture<SucursalMasVentasReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalMasVentasReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalMasVentasReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
