import { Injectable,Output, EventEmitter} from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods ,FirebaseAuthState,FirebaseAuth} from 'angularfire2';
import 'rxjs';

import { User } from './user'

@Injectable()
export class AuthService {
  @Output()
  signInEvent: EventEmitter<FirebaseAuthState> = new EventEmitter();

  @Output()
  signOutEvent: EventEmitter<boolean> = new EventEmitter();

  private authState:FirebaseAuthState;
  constructor(public auth:FirebaseAuth) {
        this.auth.subscribe(state => {
          this.authState = state
        })
  }
  get authenticated(): boolean {
    return this.authState !== null;
  }
  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }


  get user(): any {
    return this.authState;
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth.login({provider})
      .then(response => {
        let authorized: boolean;
          console.warn(response)
        if (response) {
          const data = response.auth;
          const user = new User(data);
          this.signOutEvent.emit(true);

          return user;

        } else {
          return null;
        }
      })

      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }



  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);

  }



  signOut(): void {
    this.auth.logout();
  }


  // getUser() :any  {
  //   // console.log(this.user)
  //   return this.user;
  // }



}
