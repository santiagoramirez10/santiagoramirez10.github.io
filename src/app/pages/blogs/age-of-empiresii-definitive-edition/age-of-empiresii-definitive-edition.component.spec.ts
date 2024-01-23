import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeOfEmpiresiiDefinitiveEditionComponent } from './age-of-empiresii-definitive-edition.component';

describe('AgeOfEmpiresiiDefinitiveEditionComponent', () => {
  let component: AgeOfEmpiresiiDefinitiveEditionComponent;
  let fixture: ComponentFixture<AgeOfEmpiresiiDefinitiveEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeOfEmpiresiiDefinitiveEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeOfEmpiresiiDefinitiveEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
