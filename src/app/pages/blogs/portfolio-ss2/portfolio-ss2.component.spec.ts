import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSs2Component } from './portfolio-ss2.component';

describe('PortfolioSs2Component', () => {
  let component: PortfolioSs2Component;
  let fixture: ComponentFixture<PortfolioSs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSs2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
