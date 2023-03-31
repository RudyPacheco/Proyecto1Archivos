import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMasGananciareporteComponent } from './cliente-mas-gananciareporte.component';

describe('ClienteMasGananciareporteComponent', () => {
  let component: ClienteMasGananciareporteComponent;
  let fixture: ComponentFixture<ClienteMasGananciareporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteMasGananciareporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteMasGananciareporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
