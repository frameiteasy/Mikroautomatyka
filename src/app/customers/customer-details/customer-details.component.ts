import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnChanges {
  customer: Customer;
  id: number;
  private loadedFeature: string;
  private addProject = false;
  private addPerson = false;


  constructor(private customersService: CustomersService,
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log('CustomerDetailsComponent.ngOnInit');
    this.loadedFeature = 'persons';

    this.route.params
      .subscribe(
      (params: Params) => {
        console.log('CustomerDetailsComponent.ngOnInit: this.route.params');
        this.id = +params['id'];
        console.log(this.id);
        this.customer = this.customersService.getCustomerByIndex(this.id);
        console.log(this.customer);
        this.router.navigate(['persons'], { relativeTo: this.route });
        console.log('CustomerDetailsComponent.ngOnInit: this.route.params');
      }
      );

    this.customersService.getCustomerFeatureSelected()
      .subscribe(
      (feature: string) => {
        this.loadedFeature = feature;
        console.log('CustomerDetailsComponent.ngOnInit: getCustomerFeatureSelected');
      }
      );

    this.projectsService.getAddingProjectCancelled()
      .subscribe(
      () => {
        this.addProject = false;
        console.log('CustomerDetailsComponent.ngOnInit: getAddingProjectCancelled');
      }
      );

    this.projectsService.getAddingProjectSelected()
      .subscribe(
      () => {
        this.addProject = true;
        console.log('CustomerDetailsComponent.ngOnInit: getAddingProjectSelected');
      }
      );

    this.projectsService.getNewProjectAdded()
      .subscribe(
      (project: Project) => {
        this.customer.getProjects().push(project);
        console.log('CustomerDetailsComponent.ngOnInit: getNewProjectAdded');
      }
      );

    this.customersService.getAddingPersonCancelled()
      .subscribe(
      () => {
        this.addPerson = false;
        console.log('CustomerDetailsComponent.ngOnInit: getAddingPersonCancelled');
      }
      )

    this.customersService.getAddingPersonSelected()
      .subscribe(
      () => {
        this.addPerson = true;
        console.log('CustomerDetailsComponent.ngOnInit: getAddingPersonSelected');
      }
      )
  }

  onSelectPersons() {
    this.router.navigate(['persons'], { relativeTo: this.route });
    console.log('CustomerDetailsComponent.onSelectPersons');
  }

  onSelectProjects() {
    this.router.navigate(['projects'], { relativeTo: this.route });
    console.log('CustomerDetailsComponent.onSelectProjects');
  }

  onCustomerEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    console.log('CustomerDetailsComponent.onCustomerEdit');
  }

  ngOnChanges() {
    this.loadedFeature = 'persons';
    console.log('CustomerDetailsComponent.ngOnChanges');
  }

}
