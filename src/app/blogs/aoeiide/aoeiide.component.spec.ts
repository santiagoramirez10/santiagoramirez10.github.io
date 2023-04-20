import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoeiideComponent } from './aoeiide.component';

describe('AoeiideComponent', () => {
  let component: AoeiideComponent;
  let fixture: ComponentFixture<AoeiideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoeiideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoeiideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
