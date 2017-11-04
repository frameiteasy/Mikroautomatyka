
import { Supplier } from './supplier.model';
import { Element } from './element.model';

export class ElementInProject {
  private id: number;
  private element: Element;
  private quantity: number;
  private supplier: Supplier;
  private price: number;

  constructor(id: number, element: Element, quantity: number, supplier: Supplier, price: number) {
    this.id = id;
    this.element = element;
    this.quantity = quantity;
    this.supplier = supplier;
    this.price = price;
  }

  public getId(): number {
    return this.id;
  }

  public getElement(): Element {
    return this.element;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getSupplier(): Supplier {
    if (this.supplier) {
      return this.supplier;
    }
  }

  public getPrice(): number {
    return this.price;
  }
}
