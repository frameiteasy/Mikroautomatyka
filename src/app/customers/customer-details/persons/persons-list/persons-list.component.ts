import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from '../../../../models/person.model';
import { CustomersService } from '../../../../services/customers.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  persons: Person[];
  custIndex: number;

  constructor(private customersService: CustomersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.params
      .subscribe(
      (params: Params) => {
        this.custIndex = +params['id'];
        this.persons = this.customersService.getPersonsByCustomerIndex(this.custIndex);
      }
      );
  }

  onAddPerson() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onRemove() {
    this.customersService.letRemovePersons();
  }

}
