import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasVendidoSucursalReporteComponent } from './mas-vendido-sucursal-reporte.component';

describe('MasVendidoSucursalReporteComponent', () => {
  let component: MasVendidoSucursalReporteComponent;
  let fixture: ComponentFixture<MasVendidoSucursalReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasVendidoSucursalReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasVendidoSucursalReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
