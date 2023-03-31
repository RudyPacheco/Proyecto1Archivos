import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoMasVentasReporteComponent } from './empleado-mas-ventas-reporte.component';

describe('EmpleadoMasVentasReporteComponent', () => {
  let component: EmpleadoMasVentasReporteComponent;
  let fixture: ComponentFixture<EmpleadoMasVentasReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoMasVentasReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoMasVentasReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
