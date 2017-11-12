import {Pipe, PipeTransform} from '@angular/core';
import {ElementInProject} from '../../models/element-in-project.model';

@Pipe({
  name: 'filterElementsInProject'
})
export class FilterElementsInProjectPipe implements PipeTransform {

  filterString = '';

  transform(value: ElementInProject[], filterString: string): any {
    if (value.length === 0 || filterString === '' || filterString.length < 2) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.getElement().getName().getName().toLowerCase()
          .indexOf(filterString.toLowerCase()) !== -1) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }




}
