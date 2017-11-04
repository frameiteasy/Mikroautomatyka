import { Component, OnInit } from '@angular/core';
import { Element } from '../../models/element.model';
import { ElementsService } from '../../services/elements.service';

@Component({
  selector: 'app-components-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.css']
})
export class ElementsListComponent implements OnInit {
  elements: Element[];

  constructor(private elementsService: ElementsService) { }

  ngOnInit( ) {
    this.elements = this.elementsService.getElements();
    console.log(this.elements);
  }

}
