import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    return this.Auth.userRegister(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  handleError(error) {
    this.errors = error.error.errors;
  }

}
