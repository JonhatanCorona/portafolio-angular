import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
projects = [
  { id: 1, name: 'TechStore (Rendimiento, escalabilidad y estilo en una tienda online)', imageUrl: 'techstore.png', url: 'https://github.com/JonhatanCorona/TechStore', category: 'Frontend', deploy:'https://tech-store-three-mu.vercel.app'  },
  { id: 2, name: 'Sentia (Más que una app: tu guía emocional personalizada)', imageUrl: 'sentia.png', url: 'https://github.com/lquinteroc2/FRONT-PF-2025', category: 'Backend', deploy:'https://front-pf-2025-1t99.vercel.app'  },
  { id: 3, name: ' Mi Portafolio Personal', imageUrl: 'portafolio.png', url: 'https://github.com/JonhatanCorona/portafolio-angular', category: 'Backend', deploy:'https://portafolio-angular-chi.vercel.app'  },
 ];
}
