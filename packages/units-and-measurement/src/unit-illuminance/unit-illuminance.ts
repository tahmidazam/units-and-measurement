import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitIlluminance extends Dimension {
  static SYMBOL = {
    lux: "lx",
  } as const;

  static COEFFICIENT = {
    lux: 1.0,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static lux: UnitIlluminance = new (class extends UnitIlluminance {
    constructor() {
      super(UnitIlluminance.SYMBOL.lux, UnitIlluminance.COEFFICIENT.lux);
    }
  })();

  baseUnit(): Dimension {
    return UnitIlluminance.lux;
  }
}
