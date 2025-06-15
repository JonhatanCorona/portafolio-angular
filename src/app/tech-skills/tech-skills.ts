import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
 

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
        { name: 'Next.js', iconClass: 'fab fa-react' },
        { name: 'React', iconClass: 'fab fa-react' },
        { name: 'Angular', iconClass: 'fab fa-angular' },
        { name: 'TypeScript', iconClass: 'fab fa-js' },
        { name: 'Tailwind CSS', iconClass: 'fab fa-css3-alt' },
        { name: 'Angular Material', iconClass: 'fas fa-layer-group' },
        { name: 'Bootstrap', iconClass: 'fab fa-bootstrap' },
        { name: 'Framer Motion', iconClass: 'fas fa-film' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', iconClass: 'fab fa-node-js' },
        { name: 'Express', iconClass: 'fas fa-server' },
        { name: 'NextAuth.js', iconClass: 'fas fa-user-lock' }
      ]
    },
    {
      category: 'Base de Datos',
      skills: [
        { name: 'PostgreSQL', iconClass: 'fas fa-database' },
        { name: 'MongoDB', iconClass: 'fas fa-leaf' }
      ]
    },
    {
      category: 'Otras Herramientas',
      skills: [
        { name: 'Git', iconClass: 'fab fa-git-alt' },
        { name: 'Figma', iconClass: 'fab fa-figma' },
        { name: 'Visual Studio Code', iconClass: 'fab fa-microsoft' }
      ]
    }
  ]
}

