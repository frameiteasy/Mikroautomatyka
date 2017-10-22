import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Supplier } from '../models/supplier.model';

@Injectable()
export class SupplierDataStorageService {

  constructor(private http: Http) {
  }

  getSuppliers() {
    return this.http.get('https://mikro-app-ms.firebaseio.com/suppliers.json')
      .map(
        (response: Response) => {
          const data = response.json();
          const suppliers: Supplier[] = [];
          for (let i = 0, len = data.length; i < len; i++) {
            const id = data[i].id;
            const name = data[i].name;
            const email = data[i].email;

            suppliers.push(new Supplier(id, name, email));
          }
          return suppliers;
        }
      );
  }

  storeSuppliers(suppliers: Supplier[]) {
    console.log('SupplierDataStorageService.storeSuppliers');
    console.log(suppliers);
    return this.http.put('https://mikro-app-ms.firebaseio.com/suppliers.json',
      suppliers)
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

}
