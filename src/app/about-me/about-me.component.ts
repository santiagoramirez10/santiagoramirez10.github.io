import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import  CoursesJson  from "./courses.json"
import LanguagesJson from "./languages.json"

interface COURSES {
  course: String;
  school: String;
  year: String;
}

interface LANGUAGES{
  img: String;
  alt: String;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  Courses: COURSES[] = CoursesJson;
  Languages: LANGUAGES[] = LanguagesJson;
  constructor(private title: Title) {
    title.setTitle("Sobre mí-Portafolio Santiago Ramírez Pérez");
    console.log(this.Courses);
    console.log(this.Languages);
  }




}