import { Person } from './person.model';

export class Supplier {
  id: number;
  name: string;
  email: string;
  sellers: Person[];

  constructor(id: number, name: string, email: string, sellers: Person[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.sellers = sellers;
  }
}
