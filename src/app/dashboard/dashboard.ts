import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'] 
})
export class Dashboard implements OnInit {
  userName = '';
  selectedSection: string = 'about';

  constructor(private auth: Auth, private router: Router) {}

  async ngOnInit() {
    const user = await this.auth.waitForUser();
    if (!user) {
      await this.router.navigate(['/']);
    } else {
      this.userName = user.email || 'Usuario';
    }
  }

  async onLogout() {
    await this.auth.logout();
    await this.router.navigate(['/']); 
  }

  selectSection(section: string) {
    this.selectedSection = section;
  }
}
