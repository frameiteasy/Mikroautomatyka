import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
  selector: 'app-supplier-list-menu',
  templateUrl: './supplier-list-menu.component.html',
  styleUrls: ['./supplier-list-menu.component.css']
})
export class SupplierListMenuComponent implements OnInit {

  constructor(private suppliersService: SuppliersService) { }

  ngOnInit() {
    console.log('---> SupplierListMenuComponent.ngOnInit');
    console.log(this.suppliersService.getSuppliers());
  }

  onSave() {
    console.log('---> SupplierListMenuComponent.onSave');
    console.log('Id: ' + this.suppliersService.id);
    console.log(this.suppliersService.getSuppliers());
    this.suppliersService.storeSuppliers();
  }

}
