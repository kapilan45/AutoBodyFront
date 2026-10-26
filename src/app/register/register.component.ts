import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../Services/authentification.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html'
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
