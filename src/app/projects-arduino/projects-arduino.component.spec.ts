import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsArduinoComponent } from './projects-arduino.component';

describe('ProjectsArduinoComponent', () => {
  let component: ProjectsArduinoComponent;
  let fixture: ComponentFixture<ProjectsArduinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsArduinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsArduinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
