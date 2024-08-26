import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitTemperature extends Dimension {
  static SYMBOL = {
    kelvin: "K",
    celsius: "°C",
    fahrenheit: "°F",
  } as const;

  static COEFFICIENT = {
    kelvin: 1.0,
    celsius: 1.0,
    fahrenheit: 0.55555555555556,
  } as const;

  static CONSTANT = {
    kelvin: 0.0,
    celsius: 273.15,
    fahrenheit: 255.37222222222427,
  } as const;

  private constructor(symbol: string, coefficient: number, constant: number) {
    super(symbol, new UnitConverterLinear(coefficient, constant));
  }

  static kelvin: UnitTemperature = new (class extends UnitTemperature {
    constructor() {
      super(
        UnitTemperature.SYMBOL.kelvin,
        UnitTemperature.COEFFICIENT.kelvin,
        UnitTemperature.CONSTANT.kelvin
      );
    }
  })();

  static celsius: UnitTemperature = new (class extends UnitTemperature {
    constructor() {
      super(
        UnitTemperature.SYMBOL.celsius,
        UnitTemperature.COEFFICIENT.celsius,
        UnitTemperature.CONSTANT.celsius
      );
    }
  })();

  static fahrenheit: UnitTemperature = new (class extends UnitTemperature {
    constructor() {
      super(
        UnitTemperature.SYMBOL.fahrenheit,
        UnitTemperature.COEFFICIENT.fahrenheit,
        UnitTemperature.CONSTANT.fahrenheit
      );
    }
  })();

  baseUnit(): Dimension {
    return UnitTemperature.kelvin;
  }
}
