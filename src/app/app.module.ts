import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AoeiideComponent } from './blogs/aoeiide/aoeiide.component';
import { PortfolioSSComponent } from './blogs/portfolio-ss/portfolio-ss.component';
import { ProjectsPythonComponent } from './projects-python/projects-python.component';
import { ProjectsArduinoComponent } from './projects-arduino/projects-arduino.component';
import { ProjectsRComponent } from './projects-r/projects-r.component';
import { ProjectsHtmlCssJavascriptComponent } from './projects-html-css-javascript/projects-html-css-javascript.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyProjectsComponent,
    BlogComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AoeiideComponent,
    PortfolioSSComponent,
    ProjectsPythonComponent,
    ProjectsArduinoComponent,
    ProjectsRComponent,
    ProjectsHtmlCssJavascriptComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
