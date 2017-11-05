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

    console.log(project);
    // this.elements = this.elementsService.getElements();
    this.elementService.getFilterElementsChanged()
      .subscribe(
        (filter: string) => {
          this.filteringString = filter;
        }
      )

  }

  ngOnDestroy() {
    this.elementService.getFilterElementsChanged().unsubscribe();
  }

}
