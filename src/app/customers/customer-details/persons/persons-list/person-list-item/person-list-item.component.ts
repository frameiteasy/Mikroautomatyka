import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../../../models/person.model';

@Component({
  selector: 'app-person-list-item',
  templateUrl: './person-list-item.component.html',
  styleUrls: ['./person-list-item.component.css']
})
export class PersonListItemComponent implements OnInit {
  @Input() person: Person;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  onEdit() {}

}
