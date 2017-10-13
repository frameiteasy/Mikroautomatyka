import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
  }

  onAdd(name: HTMLInputElement, email: HTMLInputElement) {
    this.customersService.addCustomer(name.value, email.value);
  }

  onCancel() {
    this.customersService.cancelAddingCustomer();
  }
}
