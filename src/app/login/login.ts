import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environment/environment';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']  // <-- aquí
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private Auth: Auth,) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

onSubmit() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;

    if (email === environment.loginEmail && password === environment.loginPassword) {
      // ✅ Login válido: guarda una sesión simple
      localStorage.setItem('auth', 'Hola, Jonas');

      // 🔁 Redirige al dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // ❌ Login inválido
      alert('Usuario o contraseña incorrectos');
    }
  }
}
}
