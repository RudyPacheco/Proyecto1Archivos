import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalMasIngresosReporteComponent } from './sucursal-mas-ingresos-reporte.component';

describe('SucursalMasIngresosReporteComponent', () => {
  let component: SucursalMasIngresosReporteComponent;
  let fixture: ComponentFixture<SucursalMasIngresosReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalMasIngresosReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalMasIngresosReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
