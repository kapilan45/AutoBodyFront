import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {AuthentificationService} from '../Services/authentification.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    imports: [ReactiveFormsModule, CommonModule, RouterLink]
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  errorMessage = '';
  isSubmitting = false;

  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
    });
  }

  register(): void {
    if (this.registerForm.invalid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.authentificationService.register(this.registerForm.getRawValue()).subscribe({
      error: () => {
        this.isSubmitting = false;
        this.errorMessage = 'Inscription ou connexion impossible. Vérifiez vos informations et réessayez.';
      }
    });
  }
}
