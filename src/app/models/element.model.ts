import {ElementName} from './element-name.model';
import {Warehouse} from './warehouse.model';
import {Supplier} from './supplier.model';

export class Element {
  id: number;
  name: ElementName;
  description: string;
  amount: number;
  limit: number;
  loss: number;
  warehouse: Warehouse;
  suppliers: Supplier[];

  constructor(id: number,
              name: ElementName,
              desc: string,
              amount: number,
              limit: number,
              loss: number,
              warehouse: Warehouse,
              suppliers: Supplier[]) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.amount = amount;
    this.limit = limit;
    this.loss = loss;
    this.warehouse = warehouse;
    this.suppliers = suppliers;
  }

  public getElementName(): string {
    return this.name.getName();
  }

  public getAmount(): number {
    return this.amount;
  }

  public getLimit(): number {
    return this.limit;
  }

  public getLoss(): number {
    return this.loss;
  }

  public getWarehouseName(): string {
    return this.warehouse.getName();
  }

}
