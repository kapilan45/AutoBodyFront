import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../Services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      mail: ['', Validators.required, Validators.email],
    });
  }

  register(){
    console.dir(this.registerForm.value);
    this.authentificationService.register(this.registerForm);
  }
}
