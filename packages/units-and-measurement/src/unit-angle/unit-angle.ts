import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitAngle extends Dimension {
  static SYMBOL = {
    degrees: "°",
    arcMinutes: "ʹ",
    arcSeconds: "ʹʹ",
    radians: "rad",
    gradians: "grad",
    revolutions: "rev",
  } as const;

  static COEFFICIENT = {
    degrees: 1.0,
    arcMinutes: 1.0 / 60.0,
    arcSeconds: 1.0 / 3600.0,
    radians: 180.0 / Math.PI,
    gradians: 0.9,
    revolutions: 360.0,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static degrees: UnitAngle = new (class extends UnitAngle {
    constructor() {
      super(UnitAngle.SYMBOL.degrees, UnitAngle.COEFFICIENT.degrees);
    }
  })();

  static arcMinutes: UnitAngle = new (class extends UnitAngle {
    constructor() {
      super(UnitAngle.SYMBOL.arcMinutes, UnitAngle.COEFFICIENT.arcMinutes);
    }
  })();

  static arcSeconds: UnitAngle = new (class extends UnitAngle {
    constructor() {
      super(UnitAngle.SYMBOL.arcSeconds, UnitAngle.COEFFICIENT.arcSeconds);
    }
  })();

  static radians: UnitAngle = new (class extends UnitAngle {
    constructor() {
      super(UnitAngle.SYMBOL.radians, UnitAngle.COEFFICIENT.radians);
    }
  })();

  static gradians: UnitAngle = new (class extends UnitAngle {
    constructor() {
      super(UnitAngle.SYMBOL.gradians, UnitAngle.COEFFICIENT.gradians);
    }
  })();

  static revolutions: UnitAngle = new (class extends UnitAngle {
    constructor() {
      super(UnitAngle.SYMBOL.revolutions, UnitAngle.COEFFICIENT.revolutions);
    }
  })();

  baseUnit(): Dimension {
    return UnitAngle.degrees;
  }
}
