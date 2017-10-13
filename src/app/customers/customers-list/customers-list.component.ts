import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customers = this.customersService.getCustomers();
    this.customersService.getCustomersChanged()
      .subscribe(
        (customers: Customer[]) => {
          this.customers = customers;
        });
  }

}
