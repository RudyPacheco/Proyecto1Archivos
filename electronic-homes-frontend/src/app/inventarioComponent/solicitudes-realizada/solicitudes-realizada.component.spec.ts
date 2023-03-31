import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesRealizadaComponent } from './solicitudes-realizada.component';

describe('SolicitudesRealizadaComponent', () => {
  let component: SolicitudesRealizadaComponent;
  let fixture: ComponentFixture<SolicitudesRealizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesRealizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
