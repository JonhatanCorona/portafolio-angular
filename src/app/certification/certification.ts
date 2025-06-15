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
    title: 'Angular Developer Certification',
    issuer: 'Google',
    date: 'Jan 2024',
    image: 'assets/certificates/angular-cert.png',
    link: 'assets/certificates/angular-cert.png' // o un enlace externo
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: 'Dec 2023',
    image: 'assets/certificates/fcc-fullstack.png',
    link: 'assets/certificates/fcc-fullstack.png'
  },
  {
    title: 'Frontend with React',
    issuer: 'Coursera',
    date: 'Feb 2023',
    image: 'assets/certificates/react-cert.png',
    link: 'assets/certificates/react-cert.png'
  }
];

}
