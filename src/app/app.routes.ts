import { Routes } from '@angular/router';
import { ProjectGridComponent } from './components/project-grid/project-grid';
import { ProjectDetailComponent } from './components/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: ProjectGridComponent }, // Home (Ruta vacía)
  { path: 'project/:id', component: ProjectDetailComponent }, // <--- ESTA ES LA CLAVE
  { path: '**', redirectTo: '' } // Si la ruta no existe, vuelve al home
];