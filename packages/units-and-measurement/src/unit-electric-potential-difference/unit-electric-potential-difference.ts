import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitElectricPotentialDifference extends Dimension {
  static SYMBOL = {
    megavolts: "MV",
    kilovolts: "kV",
    volts: "V",
    millivolts: "mV",
    microvolts: "µV",
  } as const;

  static COEFFICIENT = {
    megavolts: 1e6,
    kilovolts: 1e3,
    volts: 1.0,
    millivolts: 1e-3,
    microvolts: 1e-6,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static megavolts: UnitElectricPotentialDifference =
    new (class extends UnitElectricPotentialDifference {
      constructor() {
        super(
          UnitElectricPotentialDifference.SYMBOL.megavolts,
          UnitElectricPotentialDifference.COEFFICIENT.megavolts
        );
      }
    })();

  static kilovolts: UnitElectricPotentialDifference =
    new (class extends UnitElectricPotentialDifference {
      constructor() {
        super(
          UnitElectricPotentialDifference.SYMBOL.kilovolts,
          UnitElectricPotentialDifference.COEFFICIENT.kilovolts
        );
      }
    })();

  static volts: UnitElectricPotentialDifference =
    new (class extends UnitElectricPotentialDifference {
      constructor() {
        super(
          UnitElectricPotentialDifference.SYMBOL.volts,
          UnitElectricPotentialDifference.COEFFICIENT.volts
        );
      }
    })();

  static millivolts: UnitElectricPotentialDifference =
    new (class extends UnitElectricPotentialDifference {
      constructor() {
        super(
          UnitElectricPotentialDifference.SYMBOL.millivolts,
          UnitElectricPotentialDifference.COEFFICIENT.millivolts
        );
      }
    })();

  static microvolts: UnitElectricPotentialDifference =
    new (class extends UnitElectricPotentialDifference {
      constructor() {
        super(
          UnitElectricPotentialDifference.SYMBOL.microvolts,
          UnitElectricPotentialDifference.COEFFICIENT.microvolts
        );
      }
    })();

  baseUnit(): Dimension {
    return UnitElectricPotentialDifference.volts;
  }
}
