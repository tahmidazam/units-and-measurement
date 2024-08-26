import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitMass extends Dimension {
  static SYMBOL = {
    kilograms: "kg",
    grams: "g",
    decigrams: "dg",
    centigrams: "cg",
    milligrams: "mg",
    micrograms: "µg",
    nanograms: "ng",
    picograms: "pg",
    ounces: "oz",
    pounds: "lb",
    stones: "st",
    metricTons: "t",
    shortTons: "ton",
    carats: "ct",
    ouncesTroy: "oz t",
    slugs: "slug",
  } as const;

  static COEFFICIENT = {
    kilograms: 1.0,
    grams: 1e-3,
    decigrams: 1e-4,
    centigrams: 1e-5,
    milligrams: 1e-6,
    micrograms: 1e-9,
    nanograms: 1e-12,
    picograms: 1e-15,
    ounces: 0.0283495,
    pounds: 0.453592,
    stones: 0.157473,
    metricTons: 1000.0,
    shortTons: 907.185,
    carats: 0.0002,
    ouncesTroy: 0.03110348,
    slugs: 14.5939,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static kilograms: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.kilograms, UnitMass.COEFFICIENT.kilograms);
    }
  })();

  static grams: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.grams, UnitMass.COEFFICIENT.grams);
    }
  })();

  static decigrams: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.decigrams, UnitMass.COEFFICIENT.decigrams);
    }
  })();

  static centigrams: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.centigrams, UnitMass.COEFFICIENT.centigrams);
    }
  })();

  static milligrams: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.milligrams, UnitMass.COEFFICIENT.milligrams);
    }
  })();

  static micrograms: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.micrograms, UnitMass.COEFFICIENT.micrograms);
    }
  })();

  static nanograms: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.nanograms, UnitMass.COEFFICIENT.nanograms);
    }
  })();

  static picograms: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.picograms, UnitMass.COEFFICIENT.picograms);
    }
  })();

  static ounces: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.ounces, UnitMass.COEFFICIENT.ounces);
    }
  })();

  static pounds: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.pounds, UnitMass.COEFFICIENT.pounds);
    }
  })();

  static stones: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.stones, UnitMass.COEFFICIENT.stones);
    }
  })();

  static metricTons: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.metricTons, UnitMass.COEFFICIENT.metricTons);
    }
  })();

  static shortTons: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.shortTons, UnitMass.COEFFICIENT.shortTons);
    }
  })();

  static carats: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.carats, UnitMass.COEFFICIENT.carats);
    }
  })();

  static ouncesTroy: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.ouncesTroy, UnitMass.COEFFICIENT.ouncesTroy);
    }
  })();

  static slugs: UnitMass = new (class extends UnitMass {
    constructor() {
      super(UnitMass.SYMBOL.slugs, UnitMass.COEFFICIENT.slugs);
    }
  })();

  baseUnit(): Dimension {
    return UnitMass.kilograms;
  }
}
