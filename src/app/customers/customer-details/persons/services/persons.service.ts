import { Injectable } from '@angular/core';
import { Person } from 'app/models/person.model';

@Injectable()
export class PersonsService {

    createPerson(firstName: string, lastName: string, email: string): Person {
        if (this.validatePerson(firstName, lastName, email)) {
            return new Person(firstName, lastName, email);
        }
        return null;
    }

    validatePerson(firstName: string, lastName: string, email: string): boolean {
        return true;
    }
}
