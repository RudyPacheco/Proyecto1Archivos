import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodegaComponent } from './home-bodega.component';

describe('HomeBodegaComponent', () => {
  let component: HomeBodegaComponent;
  let fixture: ComponentFixture<HomeBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBodegaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
