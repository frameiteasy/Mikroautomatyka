import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from '../../../models/supplier.model';

@Component({
  selector: 'app-suppliers-list-item',
  templateUrl: './suppliers-list-item.component.html',
  styleUrls: ['./suppliers-list-item.component.css']
})
export class SuppliersListItemComponent implements OnInit {
  @Input() item: Supplier;
  @Input() index: number;

  ngOnInit() {
  }

}
