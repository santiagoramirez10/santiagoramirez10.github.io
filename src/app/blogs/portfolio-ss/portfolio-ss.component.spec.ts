import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSSComponent } from './portfolio-ss.component';

describe('PortfolioSSComponent', () => {
  let component: PortfolioSSComponent;
  let fixture: ComponentFixture<PortfolioSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
