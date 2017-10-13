import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Login } from './login.model';
import { DataComponent } from '../data/data.component';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  @Output() loggedOn = new EventEmitter<boolean>();
  login: Login;
  loginStatus: string = '';

  constructor(private loggingService: LoggingService) {}

  ngOnInit() {

  }

  onLogin(login: HTMLInputElement, password: HTMLInputElement) {

    this.login = new Login(login.value, password.value);

    this.checkLogin();
  }

  checkLogin() {
    if (this.login.getPassword() === DataComponent.getPasswordForLogin(this.login.getLogin())) {
      this.loginStatus = 'Login prawidłowy';
      this.loggedOn.emit(true);
      this.loggingService.log('Zalogował się użytkownik: ' + this.login.getLogin());
    } else {
      this.loginStatus = 'Login błędny';
      this.loggedOn.emit(false);
      this.loggingService.log('Uytkownik: ' + this.login.getLogin() + ' podał nieprawidłowe hasło');
    }
  }
}
