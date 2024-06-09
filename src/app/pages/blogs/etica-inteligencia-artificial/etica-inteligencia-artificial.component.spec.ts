import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EticaInteligenciaArtificialComponent } from './etica-inteligencia-artificial.component';

describe('EticaInteligenciaArtificialComponent', () => {
  let component: EticaInteligenciaArtificialComponent;
  let fixture: ComponentFixture<EticaInteligenciaArtificialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EticaInteligenciaArtificialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EticaInteligenciaArtificialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
