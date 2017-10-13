import { ElementCover } from './element-cover.model';
import { ElementType } from './element-type.model';

export class ElementName {
  value: string;
  cover: ElementCover;
  type: ElementType;
  parts: string[];

  constructor(value: string, cover: ElementCover, type: ElementType, parts: string[]) {
    this.value  = value;
    this.cover = cover;
    this.type = type;
    this.parts = parts;
  }

  private getParts(): string {
    return 'parts'; // TODO element parts
  }

  public getName(): string {
    return this.value + this.cover.getCoverName() + this.type.getTypeName() + this.getParts();
  }
}
