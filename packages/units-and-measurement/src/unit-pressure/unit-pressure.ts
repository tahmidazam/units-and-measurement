import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitPressure extends Dimension {
  static SYMBOL = {
    newtonsPerMetersSquared: "N/m²",
    gigapascals: "GPa",
    megapascals: "MPa",
    kilopascals: "kPa",
    hectopascals: "hPa",
    inchesOfMercury: "inHg",
    bars: "bar",
    millibars: "mbar",
    millimetersOfMercury: "mmHg",
    poundsForcePerSquareInch: "psi",
  } as const;

  static COEFFICIENT = {
    newtonsPerMetersSquared: 1.0,
    gigapascals: 1e9,
    megapascals: 1e6,
    kilopascals: 1e3,
    hectopascals: 1e2,
    inchesOfMercury: 3386.39,
    bars: 1e5,
    millibars: 1e2,
    millimetersOfMercury: 133.322,
    poundsForcePerSquareInch: 6894.76,
  };

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static newtonsPerMetersSquared: UnitPressure =
    new (class extends UnitPressure {
      constructor() {
        super(
          UnitPressure.SYMBOL.newtonsPerMetersSquared,
          UnitPressure.COEFFICIENT.newtonsPerMetersSquared
        );
      }
    })();

  static gigapascals: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.SYMBOL.gigapascals,
        UnitPressure.COEFFICIENT.gigapascals
      );
    }
  })();

  static megapascals: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.SYMBOL.megapascals,
        UnitPressure.COEFFICIENT.megapascals
      );
    }
  })();

  static kilopascals: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.SYMBOL.kilopascals,
        UnitPressure.COEFFICIENT.kilopascals
      );
    }
  })();

  static hectopascals: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.SYMBOL.hectopascals,
        UnitPressure.COEFFICIENT.hectopascals
      );
    }
  })();

  static inchesOfMercury: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.SYMBOL.inchesOfMercury,
        UnitPressure.COEFFICIENT.inchesOfMercury
      );
    }
  })();

  static bars: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(UnitPressure.SYMBOL.bars, UnitPressure.COEFFICIENT.bars);
    }
  })();

  static millibars: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(UnitPressure.SYMBOL.millibars, UnitPressure.COEFFICIENT.millibars);
    }
  })();

  static millimetersOfMercury: UnitPressure = new (class extends UnitPressure {
    constructor() {
      super(
        UnitPressure.SYMBOL.millimetersOfMercury,
        UnitPressure.COEFFICIENT.millimetersOfMercury
      );
    }
  })();

  static poundsForcePerSquareInch: UnitPressure =
    new (class extends UnitPressure {
      constructor() {
        super(
          UnitPressure.SYMBOL.poundsForcePerSquareInch,
          UnitPressure.COEFFICIENT.poundsForcePerSquareInch
        );
      }
    })();

  baseUnit(): Dimension {
    return UnitPressure.newtonsPerMetersSquared;
  }
}
