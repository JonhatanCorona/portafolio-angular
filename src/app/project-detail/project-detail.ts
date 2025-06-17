import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../fire';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetail {
 project: any = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getItems('projects').subscribe(data => {
        const matchedProject = data.find((p: any) => p.id === id);
        if (matchedProject) {
          this.project = matchedProject;
          console.log('Proyecto encontrado:', this.project);
        } else {
          console.error('Proyecto no encontrado con ID:', id);
        }
      });
    }
  }
}