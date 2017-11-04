import { ElementName } from './element-name.model';

export class Element {
  id: number;
  name: ElementName;
  description: string;
  limit: number;
  slop: number;

  constructor(id: number,
              name: ElementName,
              desc: string,
              limit: number,
              slop: number) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.limit = limit;
    this.slop = slop;
  }

  public getName(): ElementName {
    return this.name;
  }

  public getLimit(): number {
    return this.limit;
  }

  public getSlop(): number {
    return this.slop;
  }

}
