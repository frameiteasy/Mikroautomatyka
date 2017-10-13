/*
  Statusy projektu:
    1 - nowy
    2 - zrealizowany
*/

export class Status {

  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

}
