import {Customer} from '../models/customer.model';
import {Person} from '../models/person.model';
import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';
import {Project} from '../models/project.model';
import {Status} from '../models/status.model';
import {DataService} from './data.service';
import {DataStorageService} from './ds-customer.service';

@Injectable()
export class CustomersService {

  private customerSelected = new EventEmitter<Customer>();
  private customersChanged = new EventEmitter<Customer[]>();
  private personsChanged = new EventEmitter<Person[]>();
  private customerFeatureSelected = new EventEmitter<string>();
  private addCustomerSelected = new EventEmitter();
  private addingCustomerCancelled = new EventEmitter();
  private removeCustomerSelected = new EventEmitter();
  private addingPersonSelected = new EventEmitter();
  private removePersonsSelected = new EventEmitter();
  private addingPersonCancelled = new EventEmitter();
  private customers: Customer[] = [];
  private statuses: Status[];
  private selectedCustomer: Customer;

  constructor(private logging: LoggingService,
              private dataService: DataService,
              private dataStorageService: DataStorageService) {
    this.init();
  }

  storeCustomers() {
    this.dataStorageService.storeCustomers(this.getCustomers());
  }

  getAddingPersonSelected(): EventEmitter<any> {
    return this.addingPersonSelected;
  }

  getPersonsByCustomerIndex(index: number): Person[] {
    return this.customers[index].getPersons();
  }

  getProjectsByCustomerIndex(index: number): Project[] {
    return this.customers[index].getProjects();
  }

  // setCustomerSelected(customer: Customer) {
  //   this.selectedCustomer = customer;
  //   this.customerSelected.emit(this.selectedCustomer);
  // }

  init() {
    this.statuses = this.dataService.getStatuses();
    console.log('init customers');
    this.loadCustomers();
  }

  loadCustomers() {
    this.dataStorageService.getCustomers()
      .subscribe(
        (customers: Customer[]) => {
          this.customers = customers;
          this.customersChanged.emit(this.customers.slice());
        },
      (error) => {
        console.log(error)
      }
      );

  }

  getCustomerSelected() {
    return this.customerSelected;
  }

  getCustomersChanged() {
    return this.customersChanged;
  }

  getCustomerByIndex(index: number): Customer {
    return this.customers[index];
  }

  getCustomerFeatureSelected() {
    return this.customerFeatureSelected;
  }

  getCustomers() {
    return this.customers.slice();
  }

  saveCustomer(customer: Customer) {

  }

  public letAddCustomer() {
    this.getAddCustomerSelected().emit();
  }

  getAddCustomerSelected() {
    return this.addCustomerSelected;
  }

  public letRemoveCustomers() {
    return this.removeCustomerSelected.emit();
  }

  addCustomer(name: string, email: string) {
    let customer: Customer;
    customer = this.createCustomer(name, email);
    this.customers.push(customer);
    this.customersChanged.emit(this.customers.slice());
  }

  createCustomer(name: string, email: string): Customer {
    let id: number;
    let customer: Customer;

    id = this.dataService.getIdForCustomer();
    customer = new Customer(id, name, email, [], []);
    return customer;
  }

  cancelAddingCustomer() {
    this.addingCustomerCancelled.emit();
  }

  getAddingCustomerCancelled() {
    return this.addingCustomerCancelled;
  }

  getAddingPersonCancelled() {
    return this.addingPersonCancelled;
  }

  setCustomers(customers: Customer[]) {
    this.customers = customers;
    this.customersChanged.next(this.customers.slice());
  }

  addPerson2Customer(firstName: string, lastName: string, email: string) {
    let person: Person;
    person = new Person(firstName, lastName, email);
    this.selectedCustomer.addPerson(person);
    this.personsChanged.emit(this.selectedCustomer.getPersons().slice());
  }

  cancelAddingPerson() {
    this.addingPersonCancelled.emit();
  }

  letAddPerson(): void {
    this.addingPersonSelected.emit();
  }

  letRemovePersons(): void {
    this.removePersonsSelected.emit();
  }

  loadTestCustomers() {

    let c1: Customer;
    let c2: Customer;
    let c3: Customer;
    let c4: Customer;
    let s1: Status;
    let s2: Status;
    let s3: Status;

    s1 = this.dataService.getStatusByName('nowy');
    s2 = this.dataService.getStatusByName('realizowany');
    s3 = this.dataService.getStatusByName('ukończony');

    c1 = this.createCustomer('Energa', 'energa@energa.pl');
    c1.addProject(new Project(1, 'Projekt 11', s1, '', '', c1.getId()));
    c1.addProject(new Project(2, 'Projekt 12', s2, '', '', c1.getId()));
    c1.addPerson(new Person('Konrad', 'Marciniak', 'konmar@o2.pl'));
    c1.addPerson(new Person('Adam', 'Wilczyński', 'adawil@o2.pl'));

    c2 = this.createCustomer('Atena', 'atena@atena.pl');
    c2.addProject(new Project(3, 'Projekt 21', s1, '', '', c2.getId()));
    c2.addProject(new Project(4, 'Projekt 22', s2, '', '', c2.getId()));
    c2.addPerson(new Person('Konrad', 'Nowak', 'konnow@o2.pl'));
    c2.addPerson(new Person('Adam', 'Kowalski', 'adakow@o2.pl'));

    c3 = this.createCustomer('Kainos', 'kainos@kainso.pl');
    c3.addProject(new Project(5, 'Projekt 31', s2, '', '', c3.getId()));
    c3.addProject(new Project(6, 'Projekt 32', s3, '', '', c3.getId()));
    c3.addPerson(new Person('Marek', 'Marciniak', 'marmar@o2.pl'));
    c3.addPerson(new Person('Witold', 'Wilczyński', 'witwil@o2.pl'));

    c4 = this.createCustomer('Nordea', 'nordea@nordea.pl');
    c4.addProject(new Project(7, 'Projekt 41', s1, '', '', c4.getId()));
    c4.addProject(new Project(8, 'Projekt 42', s3, '', '', c4.getId()));
    c4.addPerson(new Person('Monika', 'Marciniak', 'monmar@o2.pl'));
    c4.addPerson(new Person('Aldona', 'Wilczyński', 'aldwil@o2.pl'));

    return [c1, c2, c3, c4];
  }

}
