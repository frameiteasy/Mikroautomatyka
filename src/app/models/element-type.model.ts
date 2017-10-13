export class ElementType {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getTypeName(): string {
    return this.name;
  }
}
