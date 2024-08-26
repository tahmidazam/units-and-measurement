import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitVolume extends Dimension {
  static SYMBOL = {
    megaliters: "ML",
    kiloliters: "kL",
    liters: "L",
    deciliters: "dl",
    centiliters: "cL",
    milliliters: "mL",
    cubicKilometers: "km³",
    cubicMeters: "m³",
    cubicDecimeters: "dm³",
    cubicCentimeters: "cm³",
    cubicMillimeters: "mm³",
    cubicInches: "in³",
    cubicFeet: "ft³",
    cubicYards: "yd³",
    cubicMiles: "mi³",
    acreFeet: "af",
    bushels: "bsh",
    teaspoons: "tsp",
    tablespoons: "tbsp",
    fluidOunces: "fl oz",
    cups: "cup",
    pints: "pt",
    quarts: "qt",
    gallons: "gal",
    imperialTeaspoons: "tsp Imperial",
    imperialTablespoons: "tbsp Imperial",
    imperialFluidOunces: "fl oz Imperial",
    imperialPints: "pt Imperial",
    imperialQuarts: "qt Imperial",
    imperialGallons: "gal Imperial",
    metricCups: "metric cup Imperial",
  } as const;

  static COEFFICIENT = {
    megaliters: 1e6,
    kiloliters: 1e3,
    liters: 1.0,
    deciliters: 1e-1,
    centiliters: 1e-2,
    milliliters: 1e-3,
    cubicKilometers: 1e12,
    cubicMeters: 1000.0,
    cubicDecimeters: 1.0,
    cubicCentimeters: 1e-3,
    cubicMillimeters: 1e-6,
    cubicInches: 0.0163871,
    cubicFeet: 28.3168,
    cubicYards: 764.555,
    cubicMiles: 4.168e12,
    acreFeet: 1.233e6,
    bushels: 35.2391,
    teaspoons: 0.00492892,
    tablespoons: 0.0147868,
    fluidOunces: 0.0295735,
    cups: 0.24,
    pints: 0.473176,
    quarts: 0.946353,
    gallons: 3.78541,
    imperialTeaspoons: 0.00591939,
    imperialTablespoons: 0.0177582,
    imperialFluidOunces: 0.0284131,
    imperialPints: 0.568261,
    imperialQuarts: 1.13652,
    imperialGallons: 4.54609,
    metricCups: 0.25,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static megaliters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.megaliters, UnitVolume.COEFFICIENT.megaliters);
    }
  })();

  static kiloliters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.kiloliters, UnitVolume.COEFFICIENT.kiloliters);
    }
  })();

  static liters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.liters, UnitVolume.COEFFICIENT.liters);
    }
  })();

  static deciliters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.deciliters, UnitVolume.COEFFICIENT.deciliters);
    }
  })();

  static centiliters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.centiliters, UnitVolume.COEFFICIENT.centiliters);
    }
  })();

  static milliliters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.milliliters, UnitVolume.COEFFICIENT.milliliters);
    }
  })();

  static cubicKilometers: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.cubicKilometers,
        UnitVolume.COEFFICIENT.cubicKilometers
      );
    }
  })();

  static cubicMeters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.cubicMeters, UnitVolume.COEFFICIENT.cubicMeters);
    }
  })();

  static cubicDecimeters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.cubicDecimeters,
        UnitVolume.COEFFICIENT.cubicDecimeters
      );
    }
  })();

  static cubicCentimeters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.cubicCentimeters,
        UnitVolume.COEFFICIENT.cubicCentimeters
      );
    }
  })();

  static cubicMillimeters: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.cubicMillimeters,
        UnitVolume.COEFFICIENT.cubicMillimeters
      );
    }
  })();

  static cubicInches: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.cubicInches, UnitVolume.COEFFICIENT.cubicInches);
    }
  })();

  static cubicFeet: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.cubicFeet, UnitVolume.COEFFICIENT.cubicFeet);
    }
  })();

  static cubicYards: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.cubicYards, UnitVolume.COEFFICIENT.cubicYards);
    }
  })();

  static cubicMiles: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.cubicMiles, UnitVolume.COEFFICIENT.cubicMiles);
    }
  })();

  static acreFeet: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.acreFeet, UnitVolume.COEFFICIENT.acreFeet);
    }
  })();

  static bushels: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.bushels, UnitVolume.COEFFICIENT.bushels);
    }
  })();

  static teaspoons: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.teaspoons, UnitVolume.COEFFICIENT.teaspoons);
    }
  })();

  static tablespoons: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.tablespoons, UnitVolume.COEFFICIENT.tablespoons);
    }
  })();

  static fluidOunces: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.fluidOunces, UnitVolume.COEFFICIENT.fluidOunces);
    }
  })();

  static cups: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.cups, UnitVolume.COEFFICIENT.cups);
    }
  })();

  static pints: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.pints, UnitVolume.COEFFICIENT.pints);
    }
  })();

  static quarts: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.quarts, UnitVolume.COEFFICIENT.quarts);
    }
  })();

  static gallons: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.gallons, UnitVolume.COEFFICIENT.gallons);
    }
  })();

  static imperialTeaspoons: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.imperialTeaspoons,
        UnitVolume.COEFFICIENT.imperialTeaspoons
      );
    }
  })();

  static imperialTablespoons: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.imperialTablespoons,
        UnitVolume.COEFFICIENT.imperialTablespoons
      );
    }
  })();

  static imperialFluidOunces: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.imperialFluidOunces,
        UnitVolume.COEFFICIENT.imperialFluidOunces
      );
    }
  })();

  static imperialPints: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.imperialPints,
        UnitVolume.COEFFICIENT.imperialPints
      );
    }
  })();

  static imperialQuarts: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.imperialQuarts,
        UnitVolume.COEFFICIENT.imperialQuarts
      );
    }
  })();

  static imperialGallons: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(
        UnitVolume.SYMBOL.imperialGallons,
        UnitVolume.COEFFICIENT.imperialGallons
      );
    }
  })();

  static metricCups: UnitVolume = new (class extends UnitVolume {
    constructor() {
      super(UnitVolume.SYMBOL.metricCups, UnitVolume.COEFFICIENT.metricCups);
    }
  })();

  baseUnit(): Dimension {
    return UnitVolume.liters;
  }
}
