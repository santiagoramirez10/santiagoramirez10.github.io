import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarDatosKaggleColabComponent } from './cargar-datos-kaggle-colab.component';

describe('CargarDatosKaggleColabComponent', () => {
  let component: CargarDatosKaggleColabComponent;
  let fixture: ComponentFixture<CargarDatosKaggleColabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarDatosKaggleColabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarDatosKaggleColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
