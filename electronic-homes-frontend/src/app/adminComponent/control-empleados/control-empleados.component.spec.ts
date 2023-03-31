import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEmpleadosComponent } from './control-empleados.component';

describe('ControlEmpleadosComponent', () => {
  let component: ControlEmpleadosComponent;
  let fixture: ComponentFixture<ControlEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
