import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { environment } from '../environment/environment';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs'; // Asegúrate de importar Subscription


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
    // 1. Declara la variable aquí, sin asignarle nada todavía.
    let subscription: Subscription;

    // 2. Ahora asígnala. La variable 'subscription' ya existe en este scope.
    subscription = this.currentUser$.subscribe(user => {
      // 3. Cuando este código se ejecute, 'subscription' ya habrá sido asignada.
      //    Por lo tanto, podemos cancelarla de forma segura.
      if (subscription) {
        subscription.unsubscribe();
      }
      resolve(user);
    });
  });
}
}
