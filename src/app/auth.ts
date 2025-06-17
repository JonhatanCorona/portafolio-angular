import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly key = 'auth';
  private readonly sessionValue = 'Hola, Jonas';

  login() {
    localStorage.setItem(this.key, this.sessionValue);
  }

  logout() {
    localStorage.removeItem(this.key);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.key) === this.sessionValue;
  }

  getUserName(): string {
    // No guardamos el nombre, así que puedes devolver uno genérico
    return this.isLoggedIn() ? 'Jonhatan' : 'Invitado';
  }
}
