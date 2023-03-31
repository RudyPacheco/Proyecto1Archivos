import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudSucursalFormComponent } from './solicitud-sucursal-form.component';

describe('SolicitudSucursalFormComponent', () => {
  let component: SolicitudSucursalFormComponent;
  let fixture: ComponentFixture<SolicitudSucursalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudSucursalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudSucursalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
