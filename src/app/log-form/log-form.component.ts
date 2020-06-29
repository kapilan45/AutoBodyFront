import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../Services/authentification.service';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html'
})
export class LogFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      remember: [Validators.required],
    });
  }

  login() {
    this.authentificationService.login(this.loginForm);
  }

}
