import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../services/elements.service';

@Component({
  selector: 'app-components-search',
  templateUrl: './elements-search.component.html',
  styleUrls: ['./elements-search.component.css']
})
export class ElementsSearchComponent implements OnInit {

  filteredElement = '';

  constructor(private elementService: ElementsService) { }

  ngOnInit() {
  }

  onChangeFilterElement() {
    this.elementService.getFilterElementsChanged().emit(this.filteredElement);
  }

}
