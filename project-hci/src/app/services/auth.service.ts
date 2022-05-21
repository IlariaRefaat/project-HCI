import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = true;
  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }
  IsAuthenticated() {
    return this.loggedIn;
  }


  constructor() { }
}
