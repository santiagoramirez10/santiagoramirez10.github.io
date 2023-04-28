import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import  CoursesJson  from "./courses.json"
import  OtherCoursesJson  from "./other_courses.json"
import LanguagesJson from "./languages.json"

interface COURSES {
  course: String;
  school: String;
  year: String;
}

interface OTHERCOURSES {
  course: String;
  school: String;
  year: String;
  link: String;
}

interface LANGUAGES{
  language: String;
  percentage: String;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  Courses: COURSES[] = CoursesJson;
  OtherCourses: OTHERCOURSES[] = OtherCoursesJson;
  Languages: LANGUAGES[] = LanguagesJson;
  constructor(private title: Title) {
    title.setTitle("Sobre mí-Portafolio Santiago Ramírez Pérez");
    console.log(this.Courses);
    console.log(this.OtherCourses);
    console.log(this.Languages);
  }




}