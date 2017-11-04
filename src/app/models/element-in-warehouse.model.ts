import { Warehouse } from './warehouse.model';
import {Element } from './element.model';

export class ElementInWarehouse {
  id: number;
  quantity: number;
  component: Element;
  warehouse: Warehouse;

  constructor(id: number, quantity: number, component: Element, warehouse: Warehouse) {
    this.id = id;
    this.quantity = quantity;
    this.component = component;
    this.warehouse = warehouse;
  }
}
