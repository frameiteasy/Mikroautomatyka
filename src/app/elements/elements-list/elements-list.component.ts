import { Component, OnDestroy, OnInit } from '@angular/core';
import { Element } from '../../models/element.model';
import { ElementsService } from '../../services/elements.service';

@Component({
  selector: 'app-components-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.css']
})
export class ElementsListComponent implements OnInit, OnDestroy {
  elements: Element[];
  filteringString = '';

  constructor(private elementsService: ElementsService) { }

  ngOnInit() {
    this.elements = this.elementsService.getElements();
    this.sortElementsByName();

    this.elementsService.getFilterElementsChanged()
      .subscribe(
        (filter: string) => {
          this.filteringString = filter;
        }
      )
  }

  sortElementsByName() {
    this.elements.sort(
      (el1, el2): number => {
        if (el1.getName().getName().toLowerCase() === el2.getName().getName().toLowerCase()) {
          return 0;
        } else {
          if ((el1.getName().getName().toLowerCase() > el2.getName().getName().toLowerCase())) {
            return 1;
          } else {
            return -1;
          }
        }
      }
    );
  }

  ngOnDestroy() {
    // this.elementsService.getFilterElementsChanged().unsubscribe();
  }
}
