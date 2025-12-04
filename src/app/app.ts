import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { SocialBar } from './components/social-bar/social-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, SocialBar], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio-web';
}