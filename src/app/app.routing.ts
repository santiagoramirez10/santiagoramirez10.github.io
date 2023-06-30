import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ArduinoProjectsComponent } from './projects/arduino-projects/arduino-projects.component';
import { PythonProjectsComponent } from './projects/python-projects/python-projects.component'
import { HtmlCssJavascriptProjectsComponent } from './projects/html-css-javascript-projects/html-css-javascript-projects.component';
import { RProjectsComponent } from './projects/r-projects/r-projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CargarDatosKaggleColabComponent } from './blogs/cargar-datos-kaggle-colab/cargar-datos-kaggle-colab.component';
import { FechaHoraAleatoriaPythonComponent } from './blogs/fecha-hora-aleatoria-python/fecha-hora-aleatoria-python.component';
import { PortfolioSSComponent } from './blogs/portfolio-ss/portfolio-ss.component';
import { AgeOfEmpiresiiDefinitiveEditionComponent } from './blogs/age-of-empiresii-definitive-edition/age-of-empiresii-definitive-edition.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    
    { path: '**', component: PageNotFoundComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
