import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  constructor(private title:Title){
    title.setTitle("Sobre mí-Portafolio Santiago Ramírez Pérez")
  }

}
