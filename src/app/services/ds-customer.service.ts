import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Customer} from '../models/customer.model';
import 'rxjs/Rx';
import {Person} from '../models/person.model';
import {Project} from '../models/project.model';
import {Status} from '../models/status.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http) {
  }

  storeCustomers(customers: Customer[]) {
    return this.http.put('https://mikro-app-ms.firebaseio.com/customers.json',
      customers)
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );

  }

  getCustomers() {
    return this.http.get('https://mikro-app-ms.firebaseio.com/customers.json')
      .map(
        (response: Response) => {
          const data = response.json();
          const customers: Customer[] = [];
          for (let i = 0, len = data.length; i < len; i++) {

            const id = data[i].id;
            const name = data[i].name;
            const email = data[i].email;
            const persons: Person[] = [];
            const projects: Project[] = [];

            if (data[i].persons) {
              for (let indexPerson = 0, lenPersons = data[i].persons.length;
                   indexPerson < lenPersons;
                   indexPerson++) {
                const firstName = data[i].persons[indexPerson].firstName;
                const secondName = data[i].persons[indexPerson].secondName;
                const personEmail = data[i].persons[indexPerson].email;
                persons.push(new Person(firstName, secondName, personEmail));
              }
            }

            if (data[i].projects) {
              for (let indexProject = 0, lenProjects = data[i].projects.length;
                   indexProject < lenProjects;
                   indexProject++) {
                const projectId = data[i].projects[indexProject].id;
                const projectName = data[i].projects[indexProject].name;
                const status: Status = new Status(data[i].projects[indexProject].status.id,
                  data[i].projects[indexProject].status.name);
                const bom = data[i].projects[indexProject].bom;
                const pandp = data[i].projects[indexProject].pandp;
                const customerId = data[i].projects[indexProject].customerId;
                projects.push(new Project(projectId, projectName, status, bom, pandp, customerId));
              }
            }

            customers.push(new Customer(id, name, email, persons, projects));
          }
          console.log('ds-getCustomers');
          console.log(customers);
          return customers;
        }
      );
  }

}
