import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {AuthentificationService} from '../Services/authentification.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-log-form',
    templateUrl: './log-form.component.html',
    imports: [ReactiveFormsModule, CommonModule, RouterLink]
})
export class LogFormComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage = '';
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false],
    });
  }

  login(): void {
    if (this.loginForm.invalid || this.isSubmitting) {
      return;
    }

    const {username, password, remember} = this.loginForm.getRawValue();
    this.isSubmitting = true;
    this.errorMessage = '';
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.authentificationService.login({username, password}, remember, returnUrl).subscribe({
      error: () => {
        this.isSubmitting = false;
        this.errorMessage = 'Connexion impossible. Vérifiez votre identifiant et votre mot de passe.';
      }
    });
  }

}
