import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoMasIngresosReporteComponent } from './empleado-mas-ingresos-reporte.component';

describe('EmpleadoMasIngresosReporteComponent', () => {
  let component: EmpleadoMasIngresosReporteComponent;
  let fixture: ComponentFixture<EmpleadoMasIngresosReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoMasIngresosReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoMasIngresosReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
