import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasIngresoSucursalReporteComponent } from './mas-ingreso-sucursal-reporte.component';

describe('MasIngresoSucursalReporteComponent', () => {
  let component: MasIngresoSucursalReporteComponent;
  let fixture: ComponentFixture<MasIngresoSucursalReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasIngresoSucursalReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasIngresoSucursalReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
