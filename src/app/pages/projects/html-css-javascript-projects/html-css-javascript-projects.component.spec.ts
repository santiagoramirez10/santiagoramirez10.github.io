import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssJavascriptProjectsComponent } from './html-css-javascript-projects.component';

describe('HtmlCssJavascriptProjectsComponent', () => {
  let component: HtmlCssJavascriptProjectsComponent;
  let fixture: ComponentFixture<HtmlCssJavascriptProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCssJavascriptProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCssJavascriptProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
