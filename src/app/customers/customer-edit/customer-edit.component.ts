import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';
import { Project } from '../../models/project.model';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id: number;
  editMode = false;
  customer: Customer;
  projects: Project[];
  persons: Person[];
  customerName = '';
  customerEmail = '';

  constructor(private route: ActivatedRoute,
              private customersService: CustomersService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        if (this.editMode) {
          this.customer = this.customersService.getCustomerByIndex(this.id);
          this.customerName = this.customer.getName();
          this.customerEmail = this.customer.getEmail();
        }
      }
    );
  }

  onSaveCustomer(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      this.customer.setName(value.name);
      this.customer.setEmail(value.email);
      this.router.navigate(['..'], {relativeTo: this.route});
    } else {
      this.customersService.addCustomer(value.name, value.email);
      this.router.navigate(['..'], {relativeTo: this.route});
    }
  }

  onCancel() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
