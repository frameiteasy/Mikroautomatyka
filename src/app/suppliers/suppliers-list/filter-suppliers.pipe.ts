import { Pipe, PipeTransform } from '@angular/core';
import { Supplier } from '../../models/supplier.model';

@Pipe({
  name: 'filterSuppliers'
})
export class FilterSuppliersPipe implements PipeTransform {

  filterString = '';

  transform(value: Supplier[], filterString: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.getName().toLowerCase().startsWith(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
