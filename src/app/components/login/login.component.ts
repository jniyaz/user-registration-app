import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form = {
    email: null,
    password: null
  }

  public errors = null;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('http://cus-tw.localhost/api/auth/login', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  handleError(error) {
    this.errors = error.error.error;
  }

}
