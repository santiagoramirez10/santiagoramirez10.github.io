import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsRComponent } from './projects-r.component';

describe('ProjectsRComponent', () => {
  let component: ProjectsRComponent;
  let fixture: ComponentFixture<ProjectsRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
