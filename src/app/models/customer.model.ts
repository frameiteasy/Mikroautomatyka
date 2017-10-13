import {Person} from './person.model';
import {Project} from './project.model';

export class Customer {
  id: number;
  name: string;
  email: string;
  persons: Person[];
  projects: Project[];

  constructor(id: number, name: string, email: string, persons: Person[], projects: Project[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.persons = persons;
    this.projects = projects;
  }

  public getId() {
    return this.id;
  }

  private genId(id: number) {
    if (id === 0) {
      return Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
    } else {
      return id;
    }
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getEmail() {
    return this.email;
  }

  public getPersons() {
    return this.persons;
  }

  public getProjects() {
    return this.projects;
  }

  public addProject(project: Project) {
    this.projects.push(project);
  }

  public addPerson(person: Person) {
    this.persons.push(person);
  }


}
