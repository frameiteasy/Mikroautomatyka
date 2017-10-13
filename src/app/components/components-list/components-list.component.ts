import { Component, OnInit } from '@angular/core';
import { Element } from '../../models/element.model';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.css']
})
export class ComponentsListComponent implements OnInit {
  elements: Element[];
  constructor(private componentsService: ComponentsService) { }

  ngOnInit( ) {
    this.elements = this.componentsService.getElements();
    console.log(this.elements);
  }

}
