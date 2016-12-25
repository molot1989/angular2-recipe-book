import { Component,OnChanges, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { RecipeService } from './recipes/recipe.service'
import { AuthService } from './auth/auth.service'
import { User } from './auth/user';
import { AuthComponent } from './auth/auth.component'
import { AngularFire, AuthProviders, AuthMethods ,FirebaseAuthState,FirebaseAuth} from 'angularfire2';


@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements  OnInit {
  
  user;
  constructor(public auth:FirebaseAuth, private as:AuthService) {
        this.auth.subscribe(state => {
          if(state != null){
          this.user = state.auth;
         } else {
           this.user = null;
         }
        })
  }
  ngOnInit() {
  }
  check(){
    console.log(this.user)
  }
  login() {
    this.as.signInWithGoogle()
  }
  logout(){
    this.as.signOut();
  }
}
