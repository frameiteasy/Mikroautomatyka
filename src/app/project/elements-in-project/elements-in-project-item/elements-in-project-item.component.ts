import { Component, Input, OnInit } from '@angular/core';
import { ElementInProject } from '../../../models/element-in-project.model';

@Component({
  selector: 'app-elements-in-project-item',
  templateUrl: './elements-in-project-item.component.html',
  styleUrls: ['./elements-in-project-item.component.css']
})
export class ElementsInProjectItemComponent implements OnInit {
  @Input() item: ElementInProject;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  getSupplierName(): string {
    if (this.item.getSupplier()) {
      return this.item.getSupplier().getName();
    }
    return 'Unknown';
  }

}
