import { UnitConverter } from "../unit-converter/unit-converter";
import { Unit } from "../unit/unit";

export abstract class Dimension extends Unit {
  public converter: UnitConverter;

  constructor(symbol: string, converter: UnitConverter) {
    super(symbol);

    this.converter = converter;
  }

  baseUnit(): Dimension {
    throw new Error(
      "You must override baseUnit in your class to define its base unit."
    );
  }
}
