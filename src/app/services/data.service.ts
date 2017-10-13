import { Status } from '../models/status.model';
import { Injectable } from '@angular/core';
import { ElementType } from '../models/element-type.model';
import { Element } from '../models/element.model';
import { ElementCover } from '../models/element-cover.model';
import {ElementName} from '../models/element-name.model';
import {Warehouse} from '../models/warehouse.model';
import {Supplier} from '../models/supplier.model';


@Injectable()
export class DataService {

  private statuses: Status[];
  private elementCovers: ElementCover[];
  private elementTypes: ElementType[];
  private elements: Element[];
  private suppliers: Supplier[];

  constructor() {
    this.init();
  }

  init() {
    this.initStatuses();
    this.initElementCases();
    this.initElementTypes();
    this.initSuppliers();
    this.loadElements();
  }

  private initSuppliers() {
    this.suppliers = [];
    this.suppliers.push(new Supplier(1, 'Supplier1', 'supp1@op.pl', []));
    this.suppliers.push(new Supplier(2, 'Supplier2', 'supp2@op.pl', []));
  }

  private initStatuses() {
    this.statuses = [];
    this.statuses.push(new Status(1, 'nowy'));
    this.statuses.push(new Status(2, 'realizowany'));
    this.statuses.push(new Status(3, 'ukończony'));
  }

  private initElementCases() {
    this.elementCovers = [];
    this.elementCovers.push(new ElementCover(1, 'case1'));
    this.elementCovers.push(new ElementCover(2, 'case2'));
    this.elementCovers.push(new ElementCover(3, 'case3'));
  }

  private initElementTypes() {
    this.elementTypes = [];
    this.elementTypes.push(new ElementType(1, 'type1'));
    this.elementTypes.push(new ElementType(2, 'type2'));
    this.elementTypes.push(new ElementType(3, 'type3'));
  }

  getStatuses(): Status[] {
    return this.statuses;
  }

  getElementCases(): ElementCover[] {
    return this.elementCovers;
  }

  getElementTypes(): ElementType[] {
    return this.elementTypes;
  }

  private loadElements() {
    this.elements = [];
    this.elements.push(new Element(1,
      new ElementName('value1', this.elementCovers[0], this.elementTypes[0], []),
      'opis 1',
      100,
      20,
      11,
      new Warehouse(1, 'magazyn1'),
      []));

    this.elements.push(new Element(2,
      new ElementName('value2', this.elementCovers[1], this.elementTypes[1], []),
      'opis 2',
      200,
      30,
      12,
      new Warehouse(2, 'magazyn2'),
      []));

    this.elements.push(new Element(3,
      new ElementName('value3', this.elementCovers[2], this.elementTypes[2], []),
      'opis 3',
      300,
      30,
      13,
      new Warehouse(1, 'magazyn3'),
      []));
  }

  getElements(): Element[] {
    return this.elements;
  }

  getStatusByName(name: string): Status {

    const k = this.statuses.length;

    for (let i = 0; i < this.statuses.length; i++) {
      if (this.statuses[i].getName() === name) {
        return this.statuses[i];
      }
    }
  }

  getIdForProject(): number {
    return 10;
  }

  getIdForCustomer(): number {
    return 77;
  }
}
