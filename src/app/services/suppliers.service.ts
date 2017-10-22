import { EventEmitter, Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.model';
import { SupplierDataStorageService } from './ds-supplier.service';

@Injectable()
export class SuppliersService {

  public id = '7';
  private suppliersChanged = new EventEmitter<Supplier[]>();
  private suppliers: Supplier[] = [];

  constructor(private supplierDataStorage: SupplierDataStorageService) {
    console.log('SuppliersService.constructor');
    this.init();
  }

  private init() {
    console.log('SuppliersService.init()');
    this.loadSuppliersData();
    // this.loadTestSuppliers();
    console.log('Koniec init()');
    console.log(this.suppliers);
  }

  public getSuppliers(): Supplier[] {
    console.log('SuppliersService.getSuppliers');
    console.log(this.suppliers);
    return this.suppliers.slice();
  }

  public getSuppliersChanged(): EventEmitter<Supplier[]> {
    console.log('SuppliersService.getSuppliersChanged');
    return this.suppliersChanged;
  }

  private loadSuppliersData() {
    console.log('-> SuppliersService.loadSuppliersData');
    this.supplierDataStorage.getSuppliers()
      .subscribe(
        (suppliers: Supplier[]) => {
          this.suppliers = suppliers;
          this.suppliersChanged.emit(this.suppliers.slice());
        },
        (error) => {
          console.log(error)
        }
      );
    console.log('Po pobraniu danych');
    console.log(this.suppliers);
  }

  storeSuppliers() {
    console.log('SuppliersService.storeSuppliers');
    console.log(this.getSuppliers());
    this.supplierDataStorage.storeSuppliers(this.getSuppliers());
  }

  private loadTestSuppliers() {
    console.log('SuppliersService.loadTestSuppliers');
    this.suppliers.push(new Supplier(1, 'A-x', 'biuro@A-x.com'));
    this.suppliers.push(new Supplier(2, 'Avnet', 'biuro@Avnet.com'));
    this.suppliers.push(new Supplier(3, 'ComSit', 'biuro@ComSit.com'));
    this.suppliers.push(new Supplier(4, 'Dasko', 'biuro@Dasko.com'));
    this.suppliers.push(new Supplier(5, 'EBV', 'biuro@EBV.com'));
    this.suppliers.push(new Supplier(6, 'Farnell', 'biuro@Farnell.com'));
    this.suppliers.push(new Supplier(7, 'Future', 'biuro@Future.com'));
    this.suppliers.push(new Supplier(8, 'Maritex', 'biuro@Maritex.com'));
    this.suppliers.push(new Supplier(9, 'Masters', 'biuro@Masters.com'));
    this.suppliers.push(new Supplier(10, 'NCAB', 'biuro@NCAB.com'));
    this.suppliers.push(new Supplier(11, 'Prodin', 'biuro@Prodin.com'));
    this.suppliers.push(new Supplier(12, 'Raftronik', 'biuro@Raftronik.com'));
    this.suppliers.push(new Supplier(13, 'T-S', 'biuro@T-S.com'));
    this.suppliers.push(new Supplier(14, 'TELZAM', 'biuro@TELZAM.com'));
    this.suppliers.push(new Supplier(15, 'TME', 'biuro@TME.com'));
    this.suppliers.push(new Supplier(16, 'u-A', 'biuro@u-A.com'));
    this.suppliers.push(new Supplier(17, 'WE', 'biuro@WE.com'));
  }

}
