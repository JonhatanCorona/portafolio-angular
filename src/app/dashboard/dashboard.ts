import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../auth';
import { AdminCertification } from '../admin-certification/admin-certification';
import { environment } from '../../environment/environment';
import { AdminAbout } from '../admin-about/admin-about';
import { AdminHome } from '../admin-home/admin-home';
import { AdminProjects } from '../admin-projects/admin-projects';
import { AdminExperience } from '../admin-experience/admin-experience';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, AdminCertification, AdminAbout, AdminHome, AdminProjects, AdminExperience],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'] 
})
export class Dashboard implements OnInit {
  userName = '';
  selectedSection: string = '';

  constructor(private auth: Auth, private router: Router) {}

  async ngOnInit() {
    await this.checkUser();
  }

  private async checkUser() {
    const localEmail = localStorage.getItem('email');
    const envEmail = environment.loginEmail; // Ajusta el nombre según tu env

    if (!localEmail || localEmail !== envEmail) {
      await this.router.navigate(['/']);
    } else {
      this.userName = localEmail;
    }
  }

  async onLogout() {
  try {
    // Cierra la sesión de Firebase
    await this.auth.logout();

    // Limpia todo el localStorage (o al menos los datos relacionados con el login)
    localStorage.removeItem('email');

    await this.router.navigate(['/']);
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    // Opcional: mostrar alerta o mensaje al usuario
    alert('Ocurrió un error al cerrar sesión.');
  }
}

getSectionTitle(): string {
  switch (this.selectedSection) {
    case '':
      return '';
    case 'about':
      return '';
    case 'experience':
      return '';
    case 'projects':
      return '';
    case 'certification':
      return '';
    default:
      return '';
  }
}


  selectSection(section: string) {
    this.selectedSection = section;
  }
}
