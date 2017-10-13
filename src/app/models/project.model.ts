import { Status } from './status.model';

export class Project {

  private id: number;
  private name: string;
  private status: Status;
  private bom: string;
  private pandp: string;
  private customerId: number;

  constructor(id: number, name: string, status: Status, bom: string, pandp: string, customerId: number) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.bom = bom;
    this.pandp = pandp;
    this.customerId = customerId;
  }

  getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getStatus(): Status {
    return this.status;
  }

}
