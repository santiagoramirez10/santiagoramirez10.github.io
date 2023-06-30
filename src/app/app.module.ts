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
import { PortfolioSSComponent } from './blogs/portfolio-ss/portfolio-ss.component';
import { ArduinoProjectsComponent } from './projects/arduino-projects/arduino-projects.component';
import { HtmlCssJavascriptProjectsComponent } from './projects/html-css-javascript-projects/html-css-javascript-projects.component';
import { PythonProjectsComponent } from './projects/python-projects/python-projects.component';
import { RProjectsComponent } from './projects/r-projects/r-projects.component';
import { CargarDatosKaggleColabComponent } from './blogs/cargar-datos-kaggle-colab/cargar-datos-kaggle-colab.component';
import { FechaHoraAleatoriaPythonComponent } from './blogs/fecha-hora-aleatoria-python/fecha-hora-aleatoria-python.component';
import { AgeOfEmpiresiiDefinitiveEditionComponent } from './blogs/age-of-empiresii-definitive-edition/age-of-empiresii-definitive-edition.component';

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
    PortfolioSSComponent,
    ArduinoProjectsComponent,
    HtmlCssJavascriptProjectsComponent,
    PythonProjectsComponent,
    RProjectsComponent,
    CargarDatosKaggleColabComponent,
    FechaHoraAleatoriaPythonComponent,
    AgeOfEmpiresiiDefinitiveEditionComponent,
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
