import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import BlogsJson from "./blogs.json";

interface BLOGS {
  "title": String,
  "description": String,
  "image": String,
  "alt": String,
  "link": String,
  "date": String;
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  Blogs: BLOGS[] = BlogsJson;
  constructor(private title: Title) {
    title.setTitle("Blog-Portafolio Santiago Ramírez Pérez")
  }
}
