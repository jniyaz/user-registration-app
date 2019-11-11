import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private baseUrl = 'http://cus-tw.localhost/api';

  constructor(private http: HttpClient) { }

  userRegister(data) {
    return this.http.post(`${this.baseUrl}/auth/register`, data)
  }

  userLogin(data) {
    return this.http.post(`${this.baseUrl}/auth/login`, data)
  }

}
