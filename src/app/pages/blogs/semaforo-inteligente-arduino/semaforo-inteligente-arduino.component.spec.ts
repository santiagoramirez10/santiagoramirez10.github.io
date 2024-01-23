import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaforoInteligenteArduinoComponent } from './semaforo-inteligente-arduino.component';

describe('SemaforoInteligenteArduinoComponent', () => {
  let component: SemaforoInteligenteArduinoComponent;
  let fixture: ComponentFixture<SemaforoInteligenteArduinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemaforoInteligenteArduinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemaforoInteligenteArduinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
