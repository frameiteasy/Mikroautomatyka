import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  @Input() customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
