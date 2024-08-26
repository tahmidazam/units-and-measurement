import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitDuration extends Dimension {
  static SYMBOL = {
    picoseconds: "ps",
    nanoseconds: "ns",
    microseconds: "µs",
    milliseconds: "ms",
    seconds: "s",
    minutes: "m",
    hours: "h",
  } as const;

  static COEFFICIENT = {
    picoseconds: 1e-12,
    nanoseconds: 1e-9,
    microseconds: 1e-6,
    milliseconds: 1e-3,
    seconds: 1.0,
    minutes: 60.0,
    hours: 3600.0,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static picoseconds: UnitDuration = new (class extends UnitDuration {
    constructor() {
      super(
        UnitDuration.SYMBOL.picoseconds,
        UnitDuration.COEFFICIENT.picoseconds
      );
    }
  })();

  static nanoseconds: UnitDuration = new (class extends UnitDuration {
    constructor() {
      super(
        UnitDuration.SYMBOL.nanoseconds,
        UnitDuration.COEFFICIENT.nanoseconds
      );
    }
  })();

  static microseconds: UnitDuration = new (class extends UnitDuration {
    constructor() {
      super(
        UnitDuration.SYMBOL.microseconds,
        UnitDuration.COEFFICIENT.microseconds
      );
    }
  })();

  static milliseconds: UnitDuration = new (class extends UnitDuration {
    constructor() {
      super(
        UnitDuration.SYMBOL.milliseconds,
        UnitDuration.COEFFICIENT.milliseconds
      );
    }
  })();

  static seconds: UnitDuration = new (class extends UnitDuration {
    constructor() {
      super(UnitDuration.SYMBOL.seconds, UnitDuration.COEFFICIENT.seconds);
    }
  })();

  static minutes: UnitDuration = new (class extends UnitDuration {
    constructor() {
      super(UnitDuration.SYMBOL.minutes, UnitDuration.COEFFICIENT.minutes);
    }
  })();

  static hours: UnitDuration = new (class extends UnitDuration {
    constructor() {
      super(UnitDuration.SYMBOL.hours, UnitDuration.COEFFICIENT.hours);
    }
  })();

  baseUnit(): Dimension {
    return UnitDuration.seconds;
  }
}
