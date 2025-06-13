import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';


@Component({
  selector: 'app-root',
  imports: [Home, Footer, RouterModule, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Project-Angular';
}
