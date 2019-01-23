import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  NgForm
} from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  form: NgForm;
  titleAlert: string = 'This field is required';
  post: any = '';
  users:  Observable<any[]>;

  constructor(public authService: AuthService,
    private db: AngularFireDatabase) {

    this.users = db.list('users').valueChanges();
  }

  ngOnInit() {  }

  onSubmit(form : NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email,password);
    this.db.list('/users').push({Email: email,Password: password});
    
    }
    
  onLogout() {
    this.authService.logout();
  }
}