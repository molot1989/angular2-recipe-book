import { Component, OnInit, Output } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

import{ AuthService } from './auth.service'


@Component({
  selector: 'rb-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private as:AuthService,private router: Router) {}
  signInWithGoogle(): void {
    this.as.signInWithGoogle()
      .then(() => this.postSignIn());
  }
  private postSignIn(): void {
    this.router.navigate(['/recipes']);
  }

}
