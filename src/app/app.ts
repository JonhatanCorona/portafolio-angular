import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { TechSkills } from './tech-skills/tech-skills';


@Component({
  selector: 'app-root',
  imports: [Home, Footer, RouterModule, About, TechSkills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   scrollToAbout(): void {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
