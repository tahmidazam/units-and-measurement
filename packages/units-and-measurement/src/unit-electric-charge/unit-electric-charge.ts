import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitElectricCharge extends Dimension {
  static SYMBOL = {
    coulombs: "C",
    megaampereHours: "MAh",
    kiloampereHours: "kAh",
    ampereHours: "Ah",
    milliampereHours: "mAh",
    microampereHours: "µAh",
  } as const;

  static COEFFICIENT = {
    coulombs: 1.0,
    megaampereHours: 3.6e9,
    kiloampereHours: 3600000.0,
    ampereHours: 3600.0,
    milliampereHours: 3.6,
    microampereHours: 0.0036,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static coulombs: UnitElectricCharge = new (class extends UnitElectricCharge {
    constructor() {
      super(
        UnitElectricCharge.SYMBOL.coulombs,
        UnitElectricCharge.COEFFICIENT.coulombs
      );
    }
  })();

  static megaampereHours: UnitElectricCharge =
    new (class extends UnitElectricCharge {
      constructor() {
        super(
          UnitElectricCharge.SYMBOL.megaampereHours,
          UnitElectricCharge.COEFFICIENT.megaampereHours
        );
      }
    })();

  static kiloampereHours: UnitElectricCharge =
    new (class extends UnitElectricCharge {
      constructor() {
        super(
          UnitElectricCharge.SYMBOL.kiloampereHours,
          UnitElectricCharge.COEFFICIENT.kiloampereHours
        );
      }
    })();

  static ampereHours: UnitElectricCharge =
    new (class extends UnitElectricCharge {
      constructor() {
        super(
          UnitElectricCharge.SYMBOL.ampereHours,
          UnitElectricCharge.COEFFICIENT.ampereHours
        );
      }
    })();

  static milliampereHours: UnitElectricCharge =
    new (class extends UnitElectricCharge {
      constructor() {
        super(
          UnitElectricCharge.SYMBOL.milliampereHours,
          UnitElectricCharge.COEFFICIENT.milliampereHours
        );
      }
    })();

  static microampereHours: UnitElectricCharge =
    new (class extends UnitElectricCharge {
      constructor() {
        super(
          UnitElectricCharge.SYMBOL.microampereHours,
          UnitElectricCharge.COEFFICIENT.microampereHours
        );
      }
    })();

  baseUnit(): Dimension {
    return UnitElectricCharge.coulombs;
  }
}
