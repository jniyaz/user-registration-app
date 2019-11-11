import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

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

  constructor(private Auth: AuthService, private Token: TokenService) { }

  onSubmit() {
    this.Auth.userLogin(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
  }

  handleError(error) {
    this.errors = error.error.error;
  }

}
