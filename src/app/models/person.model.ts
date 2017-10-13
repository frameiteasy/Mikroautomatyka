import { Customer } from './customer.model';

export class Person {
  private firstName: string;
  private secondName: string;
  private email: string;
  private customer: Customer;


  constructor(firstName: string, secondName: string, email: string) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.email = email;
  }

  getFirstName() {
    return this.firstName;
  }

  getSecondName() {
    return this.secondName;
  }

  getEmail() {
    return this.email;
  }

  getFullName() {
    return this.firstName + ' ' + this.secondName;
  }

  getCustomer() {
    return this.customer;
  }
}
