import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ArduinoProjectsComponent } from './pages/projects/arduino-projects/arduino-projects.component';
import { PythonProjectsComponent } from './pages/projects/python-projects/python-projects.component'
import { HtmlCssJavascriptProjectsComponent } from './pages/projects/html-css-javascript-projects/html-css-javascript-projects.component';
import { RProjectsComponent } from './pages/projects/r-projects/r-projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CargarDatosKaggleColabComponent } from './pages/blogs/cargar-datos-kaggle-colab/cargar-datos-kaggle-colab.component';
import { FechaHoraAleatoriaPythonComponent } from './pages/blogs/fecha-hora-aleatoria-python/fecha-hora-aleatoria-python.component';
import { PortfolioSSComponent } from './pages/blogs/portfolio-ss/portfolio-ss.component';
import { AgeOfEmpiresiiDefinitiveEditionComponent } from './pages/blogs/age-of-empiresii-definitive-edition/age-of-empiresii-definitive-edition.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PortfolioSs2Component } from './pages/blogs/portfolio-ss2/portfolio-ss2.component';
import { SemaforoInteligenteArduinoComponent } from './pages/blogs/semaforo-inteligente-arduino/semaforo-inteligente-arduino.component';

const appRoutes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "about-me", component: AboutMeComponent },
    { path: "my-projects", component: MyProjectsComponent },
    { path: "python-projects", component: PythonProjectsComponent },
    { path: "arduino-projects", component: ArduinoProjectsComponent },
    { path: "html-css-javascript-projects", component: HtmlCssJavascriptProjectsComponent },
    { path: "r-projects", component: RProjectsComponent },
    { path: "blog", component: BlogComponent },
    { path: "contact", component: ContactComponent },
    {path: "cargar-datos-kaggle-colab",component: CargarDatosKaggleColabComponent},
    {path: "fecha-hora-aleatoria-python",component: FechaHoraAleatoriaPythonComponent},
    {path: "age-of-empiresii-definitive-edition",component: AgeOfEmpiresiiDefinitiveEditionComponent},
    {path: "portfolio-ss",component: PortfolioSSComponent},
    {path: "portfolio-ss2",component: PortfolioSs2Component},
    {path: "semaforo-inteligente-arduino", component: SemaforoInteligenteArduinoComponent},
    { path: '**', component: PageNotFoundComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
