import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Customer } from '../../models/customer.model';
import { Project } from '../../models/project.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  customer: Customer;
  index: number;
  pathPandP: string;
  pathBom: string;

  constructor(private projectsService: ProjectsService,
              private customersService: CustomersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.pathBom = '';
    this.pathPandP = '';
    this.route.parent.parent.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
        }
      );
    console.log(this.index);
    if (this.index != null) {
      this.customer = this.customersService.getCustomerByIndex(this.index);
    }
  }

  onAdd(name: HTMLInputElement, status: HTMLInputElement, bom: HTMLInputElement, pandp: HTMLInputElement) {
    let project: Project;
    project = this.projectsService.createProject(name.value, status.value, bom.value, pandp.value, this.customer);
    this.customer.addProject(project);
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  onChangeBOM(event: Event) {
    this.pathBom = (<HTMLInputElement>event.target).value;
  }

  onChangePandP(event: Event) {
    this.pathPandP = (<HTMLInputElement>event.target).value;
  }

  onCancel() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
