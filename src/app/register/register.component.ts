import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthentificationService} from '../Annonce/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [],
      password: [],
      mail: [],
    });
  }

  register(){
    this.authentificationService.register(this.registerForm);
  }
}
