import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../../services/elements.service';

@Component({
  selector: 'app-elements-in-project-search',
  templateUrl: './elements-in-project-search.component.html',
  styleUrls: ['./elements-in-project-search.component.css']
})
export class ElementsInProjectSearchComponent implements OnInit {

  filteredElement = '';

  constructor(private elementService: ElementsService) { }

  ngOnInit() {
  }

  onChangeFilterElement() {
    console.log('change filter string');
    this.elementService.getFilterElementsChanged().emit(this.filteredElement);
  }

}
