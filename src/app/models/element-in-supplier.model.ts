import { Supplier } from './supplier.model';
import { Element } from './element.model';

export class ElementInSupplier {
  id: number;
  price: number;
  component: Element;
  supplier: Supplier;

  constructor(id: number, price: number, component: Element, supplier: Supplier) {
    this.id = id;
    this.price = price;
    this.component = component;
    this.supplier = supplier;
  }
}
