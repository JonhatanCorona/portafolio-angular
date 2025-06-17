import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { environment } from '../environment/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private app = initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.app);

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
    });
  }

  async login(email: string, password: string): Promise<User | null> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      this.currentUserSubject.next(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Firebase login error:', error);
      return null;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.currentUserSubject.next(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  getUserName(): string {
    return this.currentUserSubject.value?.email || 'Invitado';
  }

  // Método que espera a que el usuario esté definido o sea null después de la inicialización de Firebase
  waitForUser(): Promise<User | null> {
    return new Promise((resolve) => {
      const subscription = this.currentUser$.subscribe(user => {
        // Resolve en cuanto recibimos cualquier valor, incluso null (cuando no hay usuario)
        subscription.unsubscribe();
        resolve(user);
      });
    });
  }
}
