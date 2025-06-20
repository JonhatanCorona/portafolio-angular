import { Component } from '@angular/core';
import { DataService } from '../fire';

@Component({
  selector: 'app-admin-home',
  imports: [],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.scss'
})
export class AdminHome {
 userName: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getItems('about').subscribe(data => {
      if (data && data.length > 0) {
        this.userName = data[0].name; // Asegúrate de que la propiedad se llama 'name'
      }
    });
  }
}