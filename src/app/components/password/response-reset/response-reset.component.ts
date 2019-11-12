import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.scss']
})
export class ResponseResetComponent implements OnInit {

  public errors = [];

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }

  constructor(
    private route: ActivatedRoute,
    private authenticate: UserAuthService,
    private router: Router,
    private notify: SnotifyService
  ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token'];
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authenticate.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    let _router = this.router;
    this.notify.confirm('Done, Login with your new password.', {
      buttons: [
        {
          text: 'Okay', 
          action: toaster => {
            _router.navigateByUrl('/login'),
            this.notify.remove(toaster.id)
          }
        }
      ]
    })
    // this.router.navigateByUrl('/login');
  }

  handleError(error) {
    this.errors = error.error.errors;
  }


}
