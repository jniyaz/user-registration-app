import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  }

  public errors = null;

  constructor(
    private Authenticate: UserAuthService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.info('wait...', {timeout: 5000})
    this.Authenticate.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout: 0});
    this.form.email = null;
  }

}
