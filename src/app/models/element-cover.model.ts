export class ElementCover {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getCoverName(): string {
    return this.name;
  }
}
