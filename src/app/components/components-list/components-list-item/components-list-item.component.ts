import {Component, Input, OnInit} from '@angular/core';
import {Element} from '../../../models/element.model';

@Component({
  selector: 'app-components-list-item',
  templateUrl: './components-list-item.component.html',
  styleUrls: ['./components-list-item.component.css']
})
export class ComponentsListItemComponent implements OnInit {
  @Input() item: Element;
  @Input() index: number;

  ngOnInit() {
  }

}
