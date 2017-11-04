import { Status } from './status.model';
import { ElementInProject } from './element-in-project.model';

export class Project {

  private id: number;
  private name: string;
  private status: Status;
  private bomFile: string;
  private pandpFile: string;
  private customerId: number;
  private elements: ElementInProject[];

  constructor(id: number, name: string, status: Status, bom: string, pandp: string, customerId: number) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.bomFile = bom;
    this.pandpFile = pandp;
    this.customerId = customerId;
    this.elements = [];
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

  public getElements(): ElementInProject[] {
    if (!this.elements) {
      this.elements = [];
    }
    return this.elements;
  }

  public addElement(element: ElementInProject) {
    this.elements.push(element);
  }

}
