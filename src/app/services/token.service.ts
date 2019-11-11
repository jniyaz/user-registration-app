import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://cus-tw.localhost/api/auth/login',
    register: 'http://cus-tw.localhost/api/auth/register'
  }

  constructor() { }

  handle(token) {
    this.set(token)
  }

  set(token) {
    localStorage.setItem('token', token);
    console.log(this.isValid());
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if(token) {
      const payload = this.payload(token)
      if(payload) {
        return Object.values(this.iss).indexOf(payload.iss) ? true : false;
      }
    }

    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload)); //decoding the token string
  }

  loggedIn() {
    return this.isValid();
  }

}
