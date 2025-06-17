import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../fire';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
projects: any[] = []
 constructor(private dataService: DataService) {}
 
 ngOnInit() {
   this.dataService.getItems('projects').subscribe(data => {
     this.projects = data;
   });
  }
}
