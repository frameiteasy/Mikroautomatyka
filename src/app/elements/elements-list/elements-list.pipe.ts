import { Pipe, PipeTransform } from '@angular/core';
import { Element } from '../../models/element.model';

@Pipe({
  name: 'filterElements'
})
export class ElementsListPipe implements PipeTransform {

  filterString = '';

  transform(value: Element[], filterString: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.getName().getName().toLowerCase().startsWith(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
