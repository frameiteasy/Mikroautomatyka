import { EventEmitter, Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Project } from '../models/project.model';
import { Status } from '../models/status.model';
import { DataService } from './data.service';

@Injectable()
export class ProjectsService {

  private addingProjectCancelled = new EventEmitter();
  private addingProjectSelected = new EventEmitter();
  private removeProjectsSelected = new EventEmitter();
  private newProjectAdded = new EventEmitter<Project>();

  constructor(private dataService: DataService) {

  }

  cancelAddingProject() {
    this.addingProjectCancelled.emit();
  }

  getAddingProjectCancelled() {
    return this.addingProjectCancelled;
  }

  getAddingProjectSelected() {
    return this.addingProjectSelected;
  }

  getNewProjectAdded() {
    return this.newProjectAdded;
  }

  letAddProject() {
    this.addingProjectSelected.emit();
  }

  letRemoveProjects() {
    this.removeProjectsSelected.emit();
  }

  createProject(name: string, statusName: string, bom: string, pandp: string, customer: Customer): Project {
    let project: Project;
    let status: Status;
    let id: number;

    status = this.dataService.getStatusByName(statusName);
    id = this.dataService.getIdForProject();
    project = new Project(id, name, status, bom, pandp, customer.getId());

    return project;

   //this.addProject(project);

  }

  addProject(project: Project) {
    this.newProjectAdded.emit(project);
  }
}
