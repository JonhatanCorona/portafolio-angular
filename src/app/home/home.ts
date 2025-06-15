
import { MatIconModule } from '@angular/material/icon';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 @Output() scroll = new EventEmitter<void>();
 
}
