export class Unit {
  public symbol: string;

  constructor(symbol: string) {
    this.symbol = symbol;
  }

  isEqual(object?: any): boolean {
    // If the object is null or undefined, return false.
    if (!object) return false;

    // If the object is not an instance of the Unit class, return false.
    if (!(object instanceof Unit)) return false;

    // If the object is the same instance as the current unit, return true.
    if (this === object) return true;

    // Compare the symbol of the current unit with the symbol of the specified
    // object.
    return this.symbol === object.symbol;
  }
}
