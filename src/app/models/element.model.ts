import {ElementName} from './element-name.model';

export class Element {
  id: number;
  name: ElementName;
  description: string;
  amount: number;
  limit: number;
  loss: number;
  warehousesIds: number[];
  suppliersIds: number[];

  constructor(id: number,
              name: ElementName,
              desc: string,
              amount: number,
              limit: number,
              loss: number,
              warehousesIds: number[],
              suppliersIds: number[]) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.amount = amount;
    this.limit = limit;
    this.loss = loss;
    this.warehousesIds = warehousesIds;
    this.suppliersIds = suppliersIds;
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

}
