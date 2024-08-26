import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitArea extends Dimension {
  static SYMBOL = {
    squareMegameters: "Mm²",
    squareKilometers: "km²",
    squareMeters: "m²",
    squareCentimeters: "cm²",
    squareMillimeters: "mm²",
    squareMicrometers: "µm²",
    squareNanometers: "nm²",
    squareInches: "in²",
    squareFeet: "ft²",
    squareYards: "yd²",
    squareMiles: "mi²",
    acres: "ac",
    ares: "a",
    hectares: "ha",
  } as const;

  static COEFFICIENT = {
    squareMegameters: 1e12,
    squareKilometers: 1e6,
    squareMeters: 1.0,
    squareCentimeters: 1e-4,
    squareMillimeters: 1e-6,
    squareMicrometers: 1e-12,
    squareNanometers: 1e-18,
    squareInches: 0.00064516,
    squareFeet: 0.092903,
    squareYards: 0.836127,
    squareMiles: 2.59e6,
    acres: 4046.86,
    ares: 100.0,
    hectares: 10000.0,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static squareMegameters: UnitArea = new (class extends UnitArea {
    constructor() {
      super(
        UnitArea.SYMBOL.squareMegameters,
        UnitArea.COEFFICIENT.squareMegameters
      );
    }
  })();

  static squareKilometers: UnitArea = new (class extends UnitArea {
    constructor() {
      super(
        UnitArea.SYMBOL.squareKilometers,
        UnitArea.COEFFICIENT.squareKilometers
      );
    }
  })();

  static squareMeters: UnitArea = new (class extends UnitArea {
    constructor() {
      super(UnitArea.SYMBOL.squareMeters, UnitArea.COEFFICIENT.squareMeters);
    }
  })();

  static squareCentimeters: UnitArea = new (class extends UnitArea {
    constructor() {
      super(
        UnitArea.SYMBOL.squareCentimeters,
        UnitArea.COEFFICIENT.squareCentimeters
      );
    }
  })();

  static squareMillimeters: UnitArea = new (class extends UnitArea {
    constructor() {
      super(
        UnitArea.SYMBOL.squareMillimeters,
        UnitArea.COEFFICIENT.squareMillimeters
      );
    }
  })();

  static squareMicrometers: UnitArea = new (class extends UnitArea {
    constructor() {
      super(
        UnitArea.SYMBOL.squareMicrometers,
        UnitArea.COEFFICIENT.squareMicrometers
      );
    }
  })();

  static squareNanometers: UnitArea = new (class extends UnitArea {
    constructor() {
      super(
        UnitArea.SYMBOL.squareNanometers,
        UnitArea.COEFFICIENT.squareNanometers
      );
    }
  })();

  static squareInches: UnitArea = new (class extends UnitArea {
    constructor() {
      super(UnitArea.SYMBOL.squareInches, UnitArea.COEFFICIENT.squareInches);
    }
  })();

  static squareFeet: UnitArea = new (class extends UnitArea {
    constructor() {
      super(UnitArea.SYMBOL.squareFeet, UnitArea.COEFFICIENT.squareFeet);
    }
  })();

  static squareYards: UnitArea = new (class extends UnitArea {
    constructor() {
      super(UnitArea.SYMBOL.squareYards, UnitArea.COEFFICIENT.squareYards);
    }
  })();

  static squareMiles: UnitArea = new (class extends UnitArea {
    constructor() {
      super(UnitArea.SYMBOL.squareMiles, UnitArea.COEFFICIENT.squareMiles);
    }
  })();

  static acres: UnitArea = new (class extends UnitArea {
    constructor() {
      super(UnitArea.SYMBOL.acres, UnitArea.COEFFICIENT.acres);
    }
  })();

  static ares: UnitArea = new (class extends UnitArea {
    constructor() {
      super(UnitArea.SYMBOL.ares, UnitArea.COEFFICIENT.ares);
    }
  })();

  static hectares: UnitArea = new (class extends UnitArea {
    constructor() {
      super(UnitArea.SYMBOL.hectares, UnitArea.COEFFICIENT.hectares);
    }
  })();

  baseUnit(): Dimension {
    return UnitArea.squareMeters;
  }
}
