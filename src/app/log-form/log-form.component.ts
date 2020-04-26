import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthentificationService} from '../authentification.service';

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
      username: [],
      password: [],
    });
  }

  login() {
    // traitement
    this.authentificationService.login(this.loginForm);
  }

}
