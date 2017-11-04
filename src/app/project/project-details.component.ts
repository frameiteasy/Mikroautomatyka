import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/project.model';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  private project: Project;
  private customer: Customer;

  constructor(private customersService: CustomersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const idProject: number = this.route.snapshot.params['idProject'];
    const idCustomer: number = this.route.snapshot.params['idCustomer'];
    this.customer = this.customersService.getCustomerByIndex(idCustomer);
    this.project = this.customer.getProjectByIndex(idProject);
  }

  public getProject(): Project {
    return this.project;
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  public onComponents() {
    this.router.navigate(['components'], { relativeTo: this.route });
  }

  public onPickAndPlace() {
    this.router.navigate(['pickandplace'], { relativeTo: this.route });
  }

  public onBom() {
    this.router.navigate(['bom'], { relativeTo: this.route });
  }

  public onPersons() {
    this.router.navigate(['persons'], { relativeTo: this.route });
  }

}
