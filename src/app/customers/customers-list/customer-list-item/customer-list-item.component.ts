import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.css']
})

export class CustomerListItemComponent implements OnInit {
  @Input() item: Customer;
  @Input() index: number;

  ngOnInit() {
  }

}
