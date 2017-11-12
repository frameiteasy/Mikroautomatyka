import {Component, OnDestroy, OnInit} from '@angular/core';
import { ElementInProject } from '../../models/element-in-project.model';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { ElementsService } from '../../services/elements.service';

@Component({
  selector: 'app-components-in-project',
  templateUrl: './elements-in-project.component.html',
  styleUrls: ['./elements-in-project.component.css']
})
export class ElementsInProjectComponent implements OnInit, OnDestroy {
  elements: ElementInProject[];
  filteringString = '';

  constructor(private route: ActivatedRoute,
              private customerService: CustomersService,
              private elementService: ElementsService) { }

  ngOnInit() {
    const customerID = this.route.snapshot.parent.params['idCustomer'];
    const projectID = this.route.snapshot.parent.params['idProject'];
    const project = this.customerService.getCustomers()[customerID].getProjects()[projectID];
    this.elements = this.customerService.getCustomers()[customerID].getProjects()[projectID].getElements();
    this.sortElementsByName();

    console.log(project);
    // this.elements = this.elementsService.getElements();
    this.elementService.getFilterElementsInProjectChanged()
      .subscribe(
        (filter: string) => {
          this.filteringString = filter;
        }
      )

  }

  sortElementsByName() {
    this.elements.sort(
      (el1, el2): number => {
        if (el1.getElement().getName().getName().toLowerCase() === el2.getElement().getName().getName().toLowerCase()) {
          return 0;
        } else {
          if ((el1.getElement().getName().getName().toLowerCase() > el2.getElement().getName().getName().toLowerCase())) {
            return 1;
          } else {
            return -1;
          }
        }
      }
    );
  }

  ngOnDestroy() {
    // this.elementService.getFilterElementsInProjectChanged().unsubscribe();
  }

}
