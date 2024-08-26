import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitPower extends Dimension {
  static SYMBOL = {
    terawatts: "TW",
    gigawatts: "GW",
    megawatts: "MW",
    kilowatts: "kW",
    watts: "W",
    milliwatts: "mW",
    microwatts: "µW",
    nanowatts: "nW",
    picowatts: "pW",
    femtowatts: "fW",
    horsepower: "hp",
  } as const;

  static COEFFICIENT = {
    terawatts: 1e12,
    gigawatts: 1e9,
    megawatts: 1e6,
    kilowatts: 1e3,
    watts: 1.0,
    milliwatts: 1e-3,
    microwatts: 1e-6,
    nanowatts: 1e-9,
    picowatts: 1e-12,
    femtowatts: 1e-15,
    horsepower: 745.7,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static terawatts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.terawatts, UnitPower.COEFFICIENT.terawatts);
    }
  })();

  static gigawatts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.gigawatts, UnitPower.COEFFICIENT.gigawatts);
    }
  })();

  static megawatts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.megawatts, UnitPower.COEFFICIENT.megawatts);
    }
  })();

  static kilowatts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.kilowatts, UnitPower.COEFFICIENT.kilowatts);
    }
  })();

  static watts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.watts, UnitPower.COEFFICIENT.watts);
    }
  })();

  static milliwatts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.milliwatts, UnitPower.COEFFICIENT.milliwatts);
    }
  })();

  static microwatts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.microwatts, UnitPower.COEFFICIENT.microwatts);
    }
  })();

  static nanowatts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.nanowatts, UnitPower.COEFFICIENT.nanowatts);
    }
  })();

  static picowatts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.picowatts, UnitPower.COEFFICIENT.picowatts);
    }
  })();

  static femtowatts: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.femtowatts, UnitPower.COEFFICIENT.femtowatts);
    }
  })();

  static horsepower: UnitPower = new (class extends UnitPower {
    constructor() {
      super(UnitPower.SYMBOL.horsepower, UnitPower.COEFFICIENT.horsepower);
    }
  })();

  baseUnit(): Dimension {
    return UnitPower.watts;
  }
}
