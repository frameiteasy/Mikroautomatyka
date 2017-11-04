import { Component, Input, OnInit } from '@angular/core';
import { Element } from '../../../models/element.model';
import { ElementsService } from '../../../services/elements.service';

@Component({
  selector: 'app-components-list-item',
  templateUrl: './elements-list-item.component.html',
  styleUrls: ['./elements-list-item.component.css']
})
export class ElementsListItemComponent implements OnInit {
  @Input() item: Element;
  @Input() index: number;

  constructor(private elementsService: ElementsService) { }

  ngOnInit() {
  }

  public getElementsQuantity(): number {
    return this.elementsService.getElementsQuantity(this.item);
  }

}
