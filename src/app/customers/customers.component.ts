import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomersService } from '../services/customers.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  selectedCustomer: Customer;
  addCustomer = false;

  constructor(private customerService: CustomersService) { }

  ngOnInit() {
    this.customerService.getCustomerSelected()
      .subscribe(
        (customer: Customer) => {
          this.selectedCustomer = customer
        }
      );

    this.customerService.getAddCustomerSelected()
      .subscribe(
        () => {
          this.addCustomer = true;
        }
      )

    this.customerService.getAddingCustomerCancelled()
      .subscribe(
        () => {
          this.addCustomer = false;
        }
      )

  }

}
