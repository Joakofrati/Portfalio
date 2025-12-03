import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Es posible que este venga por defecto
import { Hero } from './components/hero/hero';
import { ProjectGridComponent } from './components/project-grid/project-grid'; // <--- 1. IMPORTAR

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, ProjectGridComponent], // ¡Importalos aquí!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio-web';
}