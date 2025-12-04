import { Component } from '@angular/core';
import { SocialBar } from '../social-bar/social-bar';

@Component({
  selector: 'app-hero',
  imports: [SocialBar],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
