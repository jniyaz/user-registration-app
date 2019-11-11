import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  public errors = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    return this.http.post('http://cus-tw.localhost/api/auth/register', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  handleError(error) {
    this.errors = error.error.errors;
  }

}
