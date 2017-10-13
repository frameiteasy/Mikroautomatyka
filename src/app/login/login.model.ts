export class Login {
  private login: string;
  private password: string;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }

  public getLogin() {
    return this.login;
  }

  public getPassword() {
    return this.password;
  }

  public setLogin(login: string) {
    this.login = login;
  }

  public setPassword(password: string) {
    this.password = password;
  }
}
