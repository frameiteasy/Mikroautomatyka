import {Injectable} from '@angular/core';
import {Element} from '../models/element.model';
import {DataService} from './data.service';

@Injectable()
export class ComponentsService {
  elements: Element[];

  constructor(private dataService: DataService) {}

  getElements() {
    this.elements = this.dataService.getElements();
    return this.elements;
  }
}
