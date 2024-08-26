import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitElectricCurrent extends Dimension {
  static SYMBOL = {
    megaamperes: "MA",
    kiloamperes: "kA",
    amperes: "A",
    milliamperes: "mA",
    microamperes: "µA",
  } as const;

  static COEFFICIENT = {
    megaamperes: 1e6,
    kiloamperes: 1e3,
    amperes: 1.0,
    milliamperes: 1e-3,
    microamperes: 1e-6,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static megaamperes: UnitElectricCurrent =
    new (class extends UnitElectricCurrent {
      constructor() {
        super(
          UnitElectricCurrent.SYMBOL.megaamperes,
          UnitElectricCurrent.COEFFICIENT.megaamperes
        );
      }
    })();

  static kiloamperes: UnitElectricCurrent =
    new (class extends UnitElectricCurrent {
      constructor() {
        super(
          UnitElectricCurrent.SYMBOL.kiloamperes,
          UnitElectricCurrent.COEFFICIENT.kiloamperes
        );
      }
    })();

  static amperes: UnitElectricCurrent = new (class extends UnitElectricCurrent {
    constructor() {
      super(
        UnitElectricCurrent.SYMBOL.amperes,
        UnitElectricCurrent.COEFFICIENT.amperes
      );
    }
  })();

  static milliamperes: UnitElectricCurrent =
    new (class extends UnitElectricCurrent {
      constructor() {
        super(
          UnitElectricCurrent.SYMBOL.milliamperes,
          UnitElectricCurrent.COEFFICIENT.milliamperes
        );
      }
    })();

  static microamperes: UnitElectricCurrent =
    new (class extends UnitElectricCurrent {
      constructor() {
        super(
          UnitElectricCurrent.SYMBOL.microamperes,
          UnitElectricCurrent.COEFFICIENT.microamperes
        );
      }
    })();

  baseUnit(): Dimension {
    return UnitElectricCurrent.amperes;
  }
}
