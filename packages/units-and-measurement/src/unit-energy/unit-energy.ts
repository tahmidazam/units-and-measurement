import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitEnergy extends Dimension {
  static SYMBOL = {
    kilojoules: "kJ",
    joules: "J",
    kilocalories: "kCal",
    calories: "cal",
    kilowattHours: "kWh",
  } as const;

  static COEFFICIENT = {
    kilojoules: 1e3,
    joules: 1.0,
    kilocalories: 4184.0,
    calories: 4.184,
    kilowattHours: 3600000.0,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static kilojoules: UnitEnergy = new (class extends UnitEnergy {
    constructor() {
      super(UnitEnergy.SYMBOL.kilojoules, UnitEnergy.COEFFICIENT.kilojoules);
    }
  })();

  static joules: UnitEnergy = new (class extends UnitEnergy {
    constructor() {
      super(UnitEnergy.SYMBOL.joules, UnitEnergy.COEFFICIENT.joules);
    }
  })();

  static kilocalories: UnitEnergy = new (class extends UnitEnergy {
    constructor() {
      super(
        UnitEnergy.SYMBOL.kilocalories,
        UnitEnergy.COEFFICIENT.kilocalories
      );
    }
  })();

  static calories: UnitEnergy = new (class extends UnitEnergy {
    constructor() {
      super(UnitEnergy.SYMBOL.calories, UnitEnergy.COEFFICIENT.calories);
    }
  })();

  static kilowattHours: UnitEnergy = new (class extends UnitEnergy {
    constructor() {
      super(
        UnitEnergy.SYMBOL.kilowattHours,
        UnitEnergy.COEFFICIENT.kilowattHours
      );
    }
  })();

  baseUnit(): Dimension {
    return UnitEnergy.joules;
  }
}
