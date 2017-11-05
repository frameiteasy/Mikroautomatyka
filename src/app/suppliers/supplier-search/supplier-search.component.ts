import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
  selector: 'app-supplier-search',
  templateUrl: './supplier-search.component.html',
  styleUrls: ['./supplier-search.component.css']
})
export class SupplierSearchComponent implements OnInit {

  filteredSupplier = '';

  constructor(private supplierService: SuppliersService) { }

  ngOnInit() {
  }

  onChangeFilterSupplier() {
    this.supplierService.getFilterSuppliersChanged().emit(this.filteredSupplier);
  }

}
