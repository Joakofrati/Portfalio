import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para ngClass o pipes si usas
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCardComponent {
  @Input() project!: Project; // Recibe el proyecto
}