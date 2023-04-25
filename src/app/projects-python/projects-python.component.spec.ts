import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPythonComponent } from './projects-python.component';

describe('ProjectsPythonComponent', () => {
  let component: ProjectsPythonComponent;
  let fixture: ComponentFixture<ProjectsPythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsPythonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
