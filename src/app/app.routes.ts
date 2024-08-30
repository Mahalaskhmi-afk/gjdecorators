import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { ServiceComponent } from './shared/service/service.component';
import { ProjectComponent } from './shared/project/project.component';
import { ContactComponent } from './shared/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: "GJDecorators | Home",
        component: HomeComponent
    },
    {
        path: 'about',
        title: "GJDecorators | About",
        component: AboutComponent
    },
    {
        path: 'service',
        title: "GJDecorators | Services",
        component: ServiceComponent
    },
    {
        path: 'project',
        title: "GJDecorators | Projects",
        component: ProjectComponent
    },
    {
        path: 'contact',
        title: "GJDecorators | Contact",
        component: ContactComponent
    }
];
