// app.routing.ts
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes = [
    { path: 'about-me', component: AboutMeComponent },
    { path: "my-projects", component: MyProjectsComponent },
    { path: "blog", component: BlogComponent },
    { path: "contact", component: ContactComponent },
    {path: '**', component: PageNotFoundComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
