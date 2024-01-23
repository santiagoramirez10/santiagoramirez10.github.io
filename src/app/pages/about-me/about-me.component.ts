import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import  CoursesJson  from "./courses.json"
import LanguagesJson from "./languages.json"
import AchievementsJson from "./achievements.json"

interface COURSES {
 img: String;
 alt:String;
  course: String;
  school: String;
  year: String;
}

interface LANGUAGES{
  img: String;
  alt: String;
}

interface ACHIEVEMENTS{
  title:String;
  year: String;
}
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  Courses: COURSES[] = CoursesJson;
  Languages: LANGUAGES[] = LanguagesJson;
  Achievements: ACHIEVEMENTS[]=AchievementsJson;
  constructor(private title: Title) {
    title.setTitle("Sobre mí-Portafolio Santiago Ramírez Pérez");
    console.log(this.Courses);
    console.log(this.Languages);
    console.log(this.Achievements);
  }




}