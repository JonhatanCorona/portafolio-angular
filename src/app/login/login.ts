import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})

export class Login {
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: Auth) {
    console.log('LoginComponent constructor'); // ✅ Aquí va el console.log
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    const user = await this.auth.login(email, password);
    
     if (user) {
       localStorage.setItem('email', email);  // Guarda el email en localStorage
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
}