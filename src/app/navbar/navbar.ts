import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  navbars = [
    { label: 'Inicio', route: '/' },
    { label: 'Sobre mí', route: '/about' },
    { label: 'Proyectos', route: '/projects' },
    { label: 'Contacto', route: '/contact' }
  ];
}
