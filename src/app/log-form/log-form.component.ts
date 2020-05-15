import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../Annonce/authentification.service';
import {ValidationService} from "../Annonce/validation-service";
=======
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthentificationService} from '../authentification.service';
>>>>>>> origin/master

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
<<<<<<< HEAD
      username: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', Validators.required],
      remember: [Validators.required],
=======
      username: [],
      password: [],
>>>>>>> origin/master
    });
  }

  login() {
<<<<<<< HEAD
    // traitement dd
=======
    // traitement
>>>>>>> origin/master
    this.authentificationService.login(this.loginForm);
  }

}
