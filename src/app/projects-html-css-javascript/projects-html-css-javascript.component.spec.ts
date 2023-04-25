import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsHtmlCssJavascriptComponent } from './projects-html-css-javascript.component';

describe('ProjectsHtmlCssJavascriptComponent', () => {
  let component: ProjectsHtmlCssJavascriptComponent;
  let fixture: ComponentFixture<ProjectsHtmlCssJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsHtmlCssJavascriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsHtmlCssJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
