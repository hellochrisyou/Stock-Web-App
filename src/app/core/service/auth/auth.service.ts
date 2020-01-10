import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '@shared/interface/models';
import { auth } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  userData: Observable<firebase.User>;


  constructor(
    public router: Router,
    public ngZone: NgZone,
    public afAuth: AngularFireAuth,
    private angularFireAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.userData = angularFireAuth.authState;
    })
  }

  // Firebase SignInWithPopup
  OAuthProvider(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((res) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Firebase Google Sign-in
  public signinGoogle() {
    return this.OAuthProvider(new auth.GoogleAuthProvider())
      .then(res => {
        console.log('Google Successfully logged in!')
      }).catch(error => {
        console.log(error)
      });
  }

  // Firebase Google Sign-in
  public signinGithub() {
    return this.OAuthProvider(new auth.GithubAuthProvider())
      .then(res => {
        console.log('Github Successfully logged in!')
      }).catch(error => {
        console.log(error)
      });
  }

  // Firebase Logout 
  public signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    })
  }

  /* Sign up */
  public signupEmail(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  public signinEmail(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!', res);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }


}

