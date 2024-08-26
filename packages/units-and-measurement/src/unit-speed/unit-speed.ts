import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitSpeed extends Dimension {
  static SYMBOL = {
    metersPerSecond: "m/s",
    kilometersPerHour: "km/h",
    milesPerHour: "mph",
    knots: "kn",
  } as const;

  static COEFFICIENT = {
    metersPerSecond: 1.0,
    kilometersPerHour: 0.277778,
    milesPerHour: 0.44704,
    knots: 0.514444,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static metersPerSecond: UnitSpeed = new (class extends UnitSpeed {
    constructor() {
      super(
        UnitSpeed.SYMBOL.metersPerSecond,
        UnitSpeed.COEFFICIENT.metersPerSecond
      );
    }
  })();

  static kilometersPerHour: UnitSpeed = new (class extends UnitSpeed {
    constructor() {
      super(
        UnitSpeed.SYMBOL.kilometersPerHour,
        UnitSpeed.COEFFICIENT.kilometersPerHour
      );
    }
  })();

  static milesPerHour: UnitSpeed = new (class extends UnitSpeed {
    constructor() {
      super(UnitSpeed.SYMBOL.milesPerHour, UnitSpeed.COEFFICIENT.milesPerHour);
    }
  })();

  static knots: UnitSpeed = new (class extends UnitSpeed {
    constructor() {
      super(UnitSpeed.SYMBOL.knots, UnitSpeed.COEFFICIENT.knots);
    }
  })();

  baseUnit(): Dimension {
    return UnitSpeed.metersPerSecond;
  }
}
