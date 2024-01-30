import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioSSComponent } from './pages/blogs/portfolio-ss/portfolio-ss.component';
import { ArduinoProjectsComponent } from './pages/projects/arduino-projects/arduino-projects.component';
import { HtmlCssJavascriptProjectsComponent } from './pages/projects/html-css-javascript-projects/html-css-javascript-projects.component';
import { PythonProjectsComponent } from './pages/projects/python-projects/python-projects.component';
import { RProjectsComponent } from './pages/projects/r-projects/r-projects.component';
import { CargarDatosKaggleColabComponent } from './pages/blogs/cargar-datos-kaggle-colab/cargar-datos-kaggle-colab.component';
import { FechaHoraAleatoriaPythonComponent } from './pages/blogs/fecha-hora-aleatoria-python/fecha-hora-aleatoria-python.component';
import { AgeOfEmpiresiiDefinitiveEditionComponent } from './pages/blogs/age-of-empiresii-definitive-edition/age-of-empiresii-definitive-edition.component';
import { PortfolioSs2Component } from './pages/blogs/portfolio-ss2/portfolio-ss2.component';
import { SemaforoInteligenteArduinoComponent } from './pages/blogs/semaforo-inteligente-arduino/semaforo-inteligente-arduino.component';

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
    PortfolioSs2Component,
    SemaforoInteligenteArduinoComponent,
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


