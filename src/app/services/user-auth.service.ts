import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private baseUrl = 'http://cus-tw.localhost/api';

  constructor(private http: HttpClient) { }

  userRegister(data) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  userLogin(data) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/auth/send-reset-password-link`, data);
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/auth/change-reset-password`, data);
  }

}
