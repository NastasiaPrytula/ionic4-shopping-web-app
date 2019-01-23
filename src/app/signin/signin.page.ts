import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  NgForm
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  form: NgForm;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(public authService: AuthService,
              private formBuilder: FormBuilder,
              private router:Router) {}

  ngOnInit() {}
  
  onSubmit(form:NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password);
  }
}