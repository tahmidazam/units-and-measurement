import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitFrequency extends Dimension {
  static SYMBOL = {
    terahertz: "THz",
    gigahertz: "GHz",
    megahertz: "MHz",
    kilohertz: "kHz",
    hertz: "Hz",
    millihertz: "mHz",
    microhertz: "µHz",
    nanohertz: "nHz",
  } as const;

  static COEFFICIENT = {
    terahertz: 1e12,
    gigahertz: 1e9,
    megahertz: 1e6,
    kilohertz: 1e3,
    hertz: 1.0,
    millihertz: 1e-3,
    microhertz: 1e-6,
    nanohertz: 1e-9,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static terahertz: UnitFrequency = new (class extends UnitFrequency {
    constructor() {
      super(
        UnitFrequency.SYMBOL.terahertz,
        UnitFrequency.COEFFICIENT.terahertz
      );
    }
  })();

  static gigahertz: UnitFrequency = new (class extends UnitFrequency {
    constructor() {
      super(
        UnitFrequency.SYMBOL.gigahertz,
        UnitFrequency.COEFFICIENT.gigahertz
      );
    }
  })();

  static megahertz: UnitFrequency = new (class extends UnitFrequency {
    constructor() {
      super(
        UnitFrequency.SYMBOL.megahertz,
        UnitFrequency.COEFFICIENT.megahertz
      );
    }
  })();

  static kilohertz: UnitFrequency = new (class extends UnitFrequency {
    constructor() {
      super(
        UnitFrequency.SYMBOL.kilohertz,
        UnitFrequency.COEFFICIENT.kilohertz
      );
    }
  })();

  static hertz: UnitFrequency = new (class extends UnitFrequency {
    constructor() {
      super(UnitFrequency.SYMBOL.hertz, UnitFrequency.COEFFICIENT.hertz);
    }
  })();

  static millihertz: UnitFrequency = new (class extends UnitFrequency {
    constructor() {
      super(
        UnitFrequency.SYMBOL.millihertz,
        UnitFrequency.COEFFICIENT.millihertz
      );
    }
  })();

  static microhertz: UnitFrequency = new (class extends UnitFrequency {
    constructor() {
      super(
        UnitFrequency.SYMBOL.microhertz,
        UnitFrequency.COEFFICIENT.microhertz
      );
    }
  })();

  static nanohertz: UnitFrequency = new (class extends UnitFrequency {
    constructor() {
      super(
        UnitFrequency.SYMBOL.nanohertz,
        UnitFrequency.COEFFICIENT.nanohertz
      );
    }
  })();

  baseUnit(): Dimension {
    return UnitFrequency.hertz;
  }
}
