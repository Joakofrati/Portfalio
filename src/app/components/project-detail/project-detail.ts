import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Escuchar cambios en la URL por si navegas de un proyecto a otro
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.project = PROJECTS.find(p => p.id === id);
        // Scroll al top al cambiar de página
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0); 
        }
      }
    });
  }
}