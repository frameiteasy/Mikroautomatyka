import { Component } from '@angular/core';
import { Login } from '../login/login.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {

  static getCustomers() {

  }

  static getLogin() {
    return new Login('demo', '12345');
  }

  static getPasswordForLogin(login: string) {
    return '12345';
  }

  constructor() { }

}
