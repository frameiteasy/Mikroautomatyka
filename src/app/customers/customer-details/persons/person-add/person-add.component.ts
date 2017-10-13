import {Component, OnInit} from '@angular/core';
import {CustomersService} from '../../../../services/customers.service';
import {Customer} from '../../../../models/customer.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PersonsService} from 'app/customers/customer-details/persons/services/persons.service';
import {Person} from 'app/models/person.model';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})

export class PersonAddComponent implements OnInit {
  customer: Customer;
  index: number;

  constructor(private customersService: CustomersService,
              private personsService: PersonsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.parent.parent.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
        }
      );
    if (this.index != null) {
      this.customer = this.customersService.getCustomerByIndex(this.index);
    }
  }
  onAddPerson(form: NgForm) {
    const value = form.value;
    let person: Person;
    person = this.personsService.createPerson(value.firstName, value.lastName, value.email);
    this.customer.addPerson(person);
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
