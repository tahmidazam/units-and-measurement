import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitLength extends Dimension {
  static SYMBOL = {
    megameters: "Mm",
    kilometers: "km",
    hectometers: "hm",
    decameters: "dam",
    meters: "m",
    decimeters: "dm",
    centimeters: "cm",
    millimeters: "mm",
    micrometers: "µm",
    nanometers: "nm",
    picometers: "pm",
    inches: "in",
    feet: "ft",
    yards: "yd",
    miles: "mi",
    scandinavianMiles: "smi",
    lightyears: "ly",
    nauticalMiles: "NM",
    fathoms: "ftm",
    furlongs: "fur",
    astronomicalUnits: "ua",
    parsecs: "pc",
  } as const;

  static COEFFICIENT = {
    megameters: 1e6,
    kilometers: 1e3,
    hectometers: 1e2,
    decameters: 1e1,
    meters: 1.0,
    decimeters: 1e-1,
    centimeters: 1e-2,
    millimeters: 1e-3,
    micrometers: 1e-6,
    nanometers: 1e-9,
    picometers: 1e-12,
    inches: 0.0254,
    feet: 0.3048,
    yards: 0.9144,
    miles: 1609.34,
    scandinavianMiles: 10000.0,
    lightyears: 9.461e15,
    nauticalMiles: 1852.0,
    fathoms: 1.8288,
    furlongs: 201.168,
    astronomicalUnits: 1.496e11,
    parsecs: 3.086e16,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static megameters: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.megameters, UnitLength.COEFFICIENT.megameters);
    }
  })();

  static kilometers: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.kilometers, UnitLength.COEFFICIENT.kilometers);
    }
  })();

  static hectometers: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.hectometers, UnitLength.COEFFICIENT.hectometers);
    }
  })();

  static decameters: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.decameters, UnitLength.COEFFICIENT.decameters);
    }
  })();

  static meters: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.meters, UnitLength.COEFFICIENT.meters);
    }
  })();

  static decimeters: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.decimeters, UnitLength.COEFFICIENT.decimeters);
    }
  })();

  static centimeters: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.centimeters, UnitLength.COEFFICIENT.centimeters);
    }
  })();

  static millimeters: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.millimeters, UnitLength.COEFFICIENT.millimeters);
    }
  })();

  static micrometers: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.micrometers, UnitLength.COEFFICIENT.micrometers);
    }
  })();

  static nanometers: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.nanometers, UnitLength.COEFFICIENT.nanometers);
    }
  })();

  static picometers: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.picometers, UnitLength.COEFFICIENT.picometers);
    }
  })();

  static inches: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.inches, UnitLength.COEFFICIENT.inches);
    }
  })();

  static feet: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.feet, UnitLength.COEFFICIENT.feet);
    }
  })();

  static yards: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.yards, UnitLength.COEFFICIENT.yards);
    }
  })();

  static miles: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.miles, UnitLength.COEFFICIENT.miles);
    }
  })();

  static scandinavianMiles: UnitLength = new (class extends UnitLength {
    constructor() {
      super(
        UnitLength.SYMBOL.scandinavianMiles,
        UnitLength.COEFFICIENT.scandinavianMiles
      );
    }
  })();

  static lightyears: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.lightyears, UnitLength.COEFFICIENT.lightyears);
    }
  })();

  static nauticalMiles: UnitLength = new (class extends UnitLength {
    constructor() {
      super(
        UnitLength.SYMBOL.nauticalMiles,
        UnitLength.COEFFICIENT.nauticalMiles
      );
    }
  })();

  static fathoms: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.fathoms, UnitLength.COEFFICIENT.fathoms);
    }
  })();

  static furlongs: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.furlongs, UnitLength.COEFFICIENT.furlongs);
    }
  })();

  static astronomicalUnits: UnitLength = new (class extends UnitLength {
    constructor() {
      super(
        UnitLength.SYMBOL.astronomicalUnits,
        UnitLength.COEFFICIENT.astronomicalUnits
      );
    }
  })();

  static parsecs: UnitLength = new (class extends UnitLength {
    constructor() {
      super(UnitLength.SYMBOL.parsecs, UnitLength.COEFFICIENT.parsecs);
    }
  })();

  baseUnit(): Dimension {
    return UnitLength.meters;
  }
}
