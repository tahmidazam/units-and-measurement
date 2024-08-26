import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitFuelEfficiency extends Dimension {
  static SYMBOL = {
    litersPer100Kilometers: "L/100km",
    milesPerImperialGallon: "mpg",
    milesPerGallon: "mpg",
  } as const;

  static COEFFICIENT = {
    litersPer100Kilometers: 1.0,
    milesPerImperialGallon: 282.481,
    milesPerGallon: 235.215,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static litersPer100Kilometers: UnitFuelEfficiency =
    new (class extends UnitFuelEfficiency {
      constructor() {
        super(
          UnitFuelEfficiency.SYMBOL.litersPer100Kilometers,
          UnitFuelEfficiency.COEFFICIENT.litersPer100Kilometers
        );
      }
    })();

  static milesPerImperialGallon: UnitFuelEfficiency =
    new (class extends UnitFuelEfficiency {
      constructor() {
        super(
          UnitFuelEfficiency.SYMBOL.milesPerImperialGallon,
          UnitFuelEfficiency.COEFFICIENT.milesPerImperialGallon
        );
      }
    })();

  static milesPerGallon: UnitFuelEfficiency =
    new (class extends UnitFuelEfficiency {
      constructor() {
        super(
          UnitFuelEfficiency.SYMBOL.milesPerGallon,
          UnitFuelEfficiency.COEFFICIENT.milesPerGallon
        );
      }
    })();

  baseUnit(): Dimension {
    return UnitFuelEfficiency.litersPer100Kilometers;
  }
}
