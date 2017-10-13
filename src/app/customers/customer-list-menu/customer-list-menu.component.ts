import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CustomersService} from '../../services/customers.service';
import {DataStorageService} from '../../services/ds-customer.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-customer-list-menu',
  templateUrl: './customer-list-menu.component.html',
  styleUrls: ['./customer-list-menu.component.css']
})
export class CustomerListMenuComponent implements OnInit {

  constructor(private customersService: CustomersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onNewCustomer() {
    console.log('onNewCustomer');
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSelect(option: string) {
    if (option === 'add') {
      this.customersService.letAddCustomer();
    }
    if (option === 'remove') {
      this.customersService.letRemoveCustomers();
    }
  }

  onSave() {
    this.customersService.storeCustomers();
  }

  onGet() {
    this.customersService.loadCustomers();
  }

}
