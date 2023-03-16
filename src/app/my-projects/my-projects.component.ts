import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent {
  constructor(private title:Title){
    title.setTitle("Mis proyectos-Portafolio Santiago Ramírez Pérez")
  }

}
