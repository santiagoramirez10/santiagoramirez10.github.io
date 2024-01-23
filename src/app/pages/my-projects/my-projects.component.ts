import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import ProjectsJson from "./projects.json"

interface PROJECTS {
  image: String;
  alt:String;
  language: String;
  link: String;
}


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent {
  Projects: PROJECTS[] = ProjectsJson;
  constructor(private title:Title){
    title.setTitle("Mis proyectos-Portafolio Santiago Ramírez Pérez");
    console.log(this.Projects);
  }

}
