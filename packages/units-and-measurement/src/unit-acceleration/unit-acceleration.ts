import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitAcceleration extends Dimension {
  static SYMBOL = {
    metersPerSecondSquared: "m/s²",
    gravity: "g",
  } as const;

  static COEFFICIENT = {
    metersPerSecondSquared: 1,
    gravity: 9.81,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static metersPerSecondSquared: UnitAcceleration =
    new (class extends UnitAcceleration {
      constructor() {
        super(
          UnitAcceleration.SYMBOL.metersPerSecondSquared,
          UnitAcceleration.COEFFICIENT.metersPerSecondSquared
        );
      }
    })();

  static gravity: UnitAcceleration = new (class extends UnitAcceleration {
    constructor() {
      super(
        UnitAcceleration.SYMBOL.gravity,
        UnitAcceleration.COEFFICIENT.gravity
      );
    }
  })();

  baseUnit(): Dimension {
    return UnitAcceleration.metersPerSecondSquared;
  }
}
