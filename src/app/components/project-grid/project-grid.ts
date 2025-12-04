import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importante para que funcionen los links
import { ProjectCardComponent } from '../project-card/project-card';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects.data'; // <--- IMPORTAMOS LA DATA CENTRALIZADA
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, RouterModule, Hero], 
  templateUrl: './project-grid.html',
  styleUrl: './project-grid.css'
})
export class ProjectGridComponent {
  // En lugar de escribir la lista aquí, la asignamos desde el archivo de datos
  projects: Project[] = PROJECTS;
}