import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent], // Importamos la card
  templateUrl: './project-grid.html',
  styleUrl: './project-grid.css'
})
export class ProjectGridComponent {
  
  projects: Project[] = [
    {
      title: 'Tracking Logístico',
      description: 'Ecosistema Web y Móvil para gestión de flotas.',
      tags: ['Angular', 'Django', 'MySQL', 'ANDROID-STUDIO'],
      image: 'assets/logitrack.png', 
      link: '#' 
    },
    {
      title: 'Editor Histológico IA',
      description: 'Herramienta médica con edición de canvas.',
      tags: ['Angular', 'Python', 'MySQL', 'Cloudinary'],
      image: 'assets/tesis.png',
      link: '#'
    },
    {
      title: 'Roguelike Deckbuilder',
      description: 'Juego de estrategia complejo en Unity.',
      tags: ['Unity', 'C#', 'Game Design'],
      image: 'assets/tcg.png',
      link: '#'
    },
    {
      title: 'Simulador Campus',
      description: 'Gemelo digital interactivo.',
      tags: ['Unity', '3D-Modeling', 'UI', 'C#'],
      image: 'assets/campus.png',
      link: '#'
    },
     {
      title: 'Chatbot Automation',
      description: 'Integración WhatsApp Business.',
      tags: ['API', 'Botconversa', 'Automation'],
      image: 'assets/botconversa.png',
      link: '#'
    },
    {
      title: 'Scripts & Tools',
      description: 'Automatización con Python.',
      tags: ['Python', 'Spotify API', 'ETL'],
      image: 'assets/scripts.png',
      link: '#'
    }
  ];
}