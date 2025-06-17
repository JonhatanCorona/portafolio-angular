import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { RouterModule, Router  } from '@angular/router';
import { Auth } from '../auth'

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})

export class Dashboard implements OnInit {
  userName = '';
  selectedSection: string = 'about'; // Sección por defecto

  selectSection(section: string) {
    this.selectedSection = section;
  }

  constructor(private Auth: Auth, private router: Router) {}

  ngOnInit(): void {
    if (!this.Auth.isLoggedIn()) {
      this.router.navigate(['/']); // Redirige a home si no está autenticado
    } else {
      this.userName = this.Auth.getUserName();
    }
  }
}

