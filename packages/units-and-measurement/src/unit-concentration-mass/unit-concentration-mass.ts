import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitConcentrationMass extends Dimension {
  static SYMBOL = {
    gramsPerLiter: "g/L",
    milligramsPerDeciliter: "mg/dL",
    millimolesPerLiter: "mmol/L",
  } as const;

  static COEFFICIENT = {
    gramsPerLiter: 1.0,
    milligramsPerDeciliter: 0.01,
    millimolesPerLiter: 18.0,
  };

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static gramsPerLiter: UnitConcentrationMass =
    new (class extends UnitConcentrationMass {
      constructor() {
        super(
          UnitConcentrationMass.SYMBOL.gramsPerLiter,
          UnitConcentrationMass.COEFFICIENT.gramsPerLiter
        );
      }
    })();

  static milligramsPerDeciliter: UnitConcentrationMass =
    new (class extends UnitConcentrationMass {
      constructor() {
        super(
          UnitConcentrationMass.SYMBOL.milligramsPerDeciliter,
          UnitConcentrationMass.COEFFICIENT.milligramsPerDeciliter
        );
      }
    })();

  static millimolesPerLiter: UnitConcentrationMass =
    new (class extends UnitConcentrationMass {
      constructor() {
        super(
          UnitConcentrationMass.SYMBOL.millimolesPerLiter,
          UnitConcentrationMass.COEFFICIENT.millimolesPerLiter
        );
      }
    })();

  baseUnit(): Dimension {
    return UnitConcentrationMass.gramsPerLiter;
  }
}
