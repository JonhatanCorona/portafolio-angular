import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certification',
  imports: [CommonModule],
  templateUrl: './certification.html',
  styleUrl: './certification.scss'
})
export class Certification {
certifications = [
  {
    title: 'Desarrollador Full Stack',
    issuer: 'Henry',
    date: 'Junio 2025',
    logo: 'henry.jpg',
    link: 'henry.pdf' // o un enlace externo
  },
  {
    title: 'React',
    issuer: 'Platzi',
    date: 'Marzo 2025',
    logo: 'platzi.jpg',
    link: 'react.pdf'
  },
  {
    title: 'Angular desde cero con Bluuweb',
    issuer: 'Cursa',
    date: 'Junio 2025',
    logo: 'cursa.png',
    link: 'cursa.pdf'
  }
];

}
