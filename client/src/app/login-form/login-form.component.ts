import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: string;
  username: string;
  password: string;

  constructor(private session: SessionService) { }

  ngOnInit() { }

  login() {
    this.session.login(this.username, this.password)
      .subscribe(
      (user) => { console.log(user);},
      (err) => this.error = err
      );
  }
  errorCb(err) {
    this.error = err;
    this.username = null;
  }

  successCb(user) {
    this.username = user;
    this.error = null;
  }

}
