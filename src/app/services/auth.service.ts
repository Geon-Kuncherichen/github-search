import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth:AngularFireAuth) { }

signUp(email:string,password:string)
{
  return this.angularFireAuth.createUserWithEmailAndPassword(email,password)
}

signIn(email:string,password:string)
{
  return this.angularFireAuth.signInWithEmailAndPassword(email,password)
}

getUser()
{
  return this.angularFireAuth.authState;
}

signOut()
{
  return of(this.angularFireAuth.signOut());
}




}
