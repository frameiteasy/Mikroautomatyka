import { ElementCover } from './element-cover.model';
import { ElementType } from './element-type.model';

export class ElementName {
  value: string;
  cover: ElementCover;
  type: ElementType;
  parts: string[];
  name: string;

  constructor(value: string, cover: ElementCover, type: ElementType, parts: string[], name: string) {
    this.value  = value;
    this.cover = cover;
    this.type = type;
    this.parts = parts;
    this.name = name;
  }

  private getParts(): string {
    return 'parts'; // TODO element parts
  }

  public getName(): string {
    if (!this.name) {
      return this.name;
    }

    return this.value + this.cover.getCoverName() + this.type.getTypeName() + this.getParts();
  }
}
