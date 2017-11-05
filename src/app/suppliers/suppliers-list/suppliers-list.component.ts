import { Component, OnDestroy, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier.model';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit, OnDestroy {
  suppliers: Supplier[];
  filteringString = '';

  constructor(private suppliersService: SuppliersService) { }

  ngOnInit() {

    this.suppliers = this.suppliersService.getSuppliers();
    this.suppliersService.getSuppliersChanged()
      .subscribe(
        (suppliers: Supplier[]) => {
          this.suppliers = suppliers;
        });
    this.suppliersService.getFilterSuppliersChanged()
      .subscribe(
        (filter: string) => {
          this.filteringString = filter;
        }
      )
  }

  ngOnDestroy() {
    this.suppliersService.getFilterSuppliersChanged().unsubscribe();
  }
}
