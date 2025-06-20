import { MatIconModule } from '@angular/material/icon';
import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../fire';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
items: any[] = [];
constructor(private dataService: DataService) {}
ngOnInit() {
    // Retrasa ligeramente la ejecución para permitir que Zone.js se asiente completamente
    this.dataService.getItems('about').subscribe(data => { // Añade un pequeño delay
      this.items = data;
    });}

  @Output() scroll = new EventEmitter<string>();

  navigateTo(sectionId: string): void {
    this.scroll.emit(sectionId);
  }
}
