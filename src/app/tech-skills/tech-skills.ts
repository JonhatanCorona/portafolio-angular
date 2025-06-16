import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
declare var bootstrap: any;
 

@Component({
  selector: 'app-tech-skills',
  imports: [CommonModule],
  templateUrl: './tech-skills.html',
  styleUrl: './tech-skills.scss'
})
export class TechSkills {
  
categories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', iconFile: 'react.svg' },
      { name: 'Next.js', iconFile: 'nextjs.svg' },
      { name: 'Angular', iconFile: 'angular.png' },
      { name: 'TypeScript', iconFile: 'typescript.png' },
      { name: 'Tailwind CSS', iconFile: 'tailwind.svg' },
      { name: 'Bootstrap', iconFile: 'bootstrap.png' },
      { name: 'Framer Motion', iconFile: 'framer-motion.png' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', iconFile: 'node.png' },
      { name: 'Express', iconFile: 'express.webp' },
    ],
  },
  {
    category: 'Base de Datos',
    skills: [
      { name: 'PostgreSQL', iconFile: 'postgresql.png' },
      { name: 'MongoDB', iconFile: 'mongodb.svg' },
    ],
  },
  {
    category: 'Otras Herramientas',
    skills: [
      { name: 'Git', iconFile: 'git.png' },
      { name: 'Figma', iconFile: 'figma.svg' },
      { name: 'Visual Studio Code', iconFile: 'visual.png' },
    ],
  },
];

}

