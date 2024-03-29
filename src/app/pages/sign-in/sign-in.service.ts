import { Injectable, NgZone } from '@angular/core';
// import { User } from '../models/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '@shared/models/user';
import { LinkSettings } from '@shared/models';
import { Observable } from 'rxjs';
// import jwt from 'jsonwebtoken';


@Injectable({
  providedIn: 'root',
})
export class SignInService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
               .signInWithEmailAndPassword(email, password);
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
               .createUserWithEmailAndPassword(email, password)
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail(email: string) {
    return this.afAuth
               .currentUser
               .then((u: any) => u.sendEmailVerification());
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard']);
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `Users/${user.uid}`
      );
      
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  getUserData(uid: string): Observable<User> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`Users/${uid}`);
    return userRef.valueChanges();
  }

  getUserLinks(uid: string): Observable<User> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`LinkSettings/${uid}`);
    return userRef.valueChanges();
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

  // generateToken(userName: string,
  //               password: string,
  //               uid: string) {

  //   const secretKey = 'abinVFRO1234'; // Reemplaza con tu propia clave secreta
  //   const expirationTime = '1m'; // Duración del token (1 minuto)
  
  //   const payload = {
  //     userName,
  //     password,
  //     uid
  //   };
  
  //   const token = jwt.sign(payload, secretKey, { expiresIn: expirationTime });
  
  //   return token;

  // }

}
