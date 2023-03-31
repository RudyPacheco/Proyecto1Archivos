import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProductoFormComponent } from './registrar-producto-form.component';

describe('RegistrarProductoFormComponent', () => {
  let component: RegistrarProductoFormComponent;
  let fixture: ComponentFixture<RegistrarProductoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarProductoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarProductoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
