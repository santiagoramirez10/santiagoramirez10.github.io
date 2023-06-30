import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaHoraAleatoriaPythonComponent } from './fecha-hora-aleatoria-python.component';

describe('FechaHoraAleatoriaPythonComponent', () => {
  let component: FechaHoraAleatoriaPythonComponent;
  let fixture: ComponentFixture<FechaHoraAleatoriaPythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaHoraAleatoriaPythonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechaHoraAleatoriaPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
