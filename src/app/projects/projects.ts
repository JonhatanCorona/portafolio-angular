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
  { id: 1, name: 'Proyecto Uno', imageUrl: 'techstore.png', url: '/proyecto-uno', category: 'Frontend' },
  { id: 2, name: 'Proyecto Dos', imageUrl: 'sentia.png', url: '/proyecto-dos', category: 'Backend' },
  { id: 3, name: 'Proyecto Tres', imageUrl: 'proyecto3.png', url: '/proyecto-tres', category: 'Full Stack' },
  { id: 4, name: 'Proyecto Cuatro', imageUrl: 'techsore.png', url: '/proyecto-cuatro', category: 'Frontend' },
  { id: 5, name: 'Proyecto Cinco', imageUrl: 'senta.png', url: '/proyecto-cinco', category: 'Backend' },
  { id: 6, name: 'Proyecto Seis', imageUrl: 'proyecto3.png', url: '/proyecto-seis', category: 'Full Stack' },
];
}
