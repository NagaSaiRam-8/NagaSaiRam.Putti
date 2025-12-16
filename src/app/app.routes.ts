import { Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';

export const routes: Routes = [
      // { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact }
];
