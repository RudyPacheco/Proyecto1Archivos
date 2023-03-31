import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEmpleadoFormsComponent } from './nuevo-empleado-forms.component';

describe('NuevoEmpleadoFormsComponent', () => {
  let component: NuevoEmpleadoFormsComponent;
  let fixture: ComponentFixture<NuevoEmpleadoFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEmpleadoFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoEmpleadoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
