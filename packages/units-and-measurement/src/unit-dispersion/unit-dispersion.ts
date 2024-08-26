import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitDispersion extends Dimension {
  static SYMBOL = {
    partsPerMillion: "ppm",
  } as const;

  static COEFFICIENT = {
    partsPerMillion: 1.0,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static partsPerMillion: UnitDispersion = new (class extends UnitDispersion {
    constructor() {
      super(
        UnitDispersion.SYMBOL.partsPerMillion,
        UnitDispersion.COEFFICIENT.partsPerMillion
      );
    }
  })();

  baseUnit(): Dimension {
    return UnitDispersion.partsPerMillion;
  }
}
