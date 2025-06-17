import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../fire';

@Component({
  selector: 'app-certification',
  imports: [CommonModule],
  templateUrl: './certification.html',
  styleUrl: './certification.scss'
})
export class Certification {

certifications: any[] = []
 constructor(private dataService: DataService) {}
 
 ngOnInit() {
   this.dataService.getItems('certification').subscribe(data => {
     this.certifications = data;
   });
  }
}
