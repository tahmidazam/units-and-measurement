import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitElectricResistance extends Dimension {
  static SYMBOL = {
    megaohms: "MΩ",
    kiloohms: "kΩ",
    ohms: "Ω",
    milliohms: "mΩ",
    microohms: "µΩ",
  } as const;

  static COEFFICIENT = {
    megaohms: 1e6,
    kiloohms: 1e3,
    ohms: 1.0,
    milliohms: 1e-3,
    microohms: 1e-6,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static megaohms: UnitElectricResistance =
    new (class extends UnitElectricResistance {
      constructor() {
        super(
          UnitElectricResistance.SYMBOL.megaohms,
          UnitElectricResistance.COEFFICIENT.megaohms
        );
      }
    })();

  static kiloohms: UnitElectricResistance =
    new (class extends UnitElectricResistance {
      constructor() {
        super(
          UnitElectricResistance.SYMBOL.kiloohms,
          UnitElectricResistance.COEFFICIENT.kiloohms
        );
      }
    })();

  static ohms: UnitElectricResistance =
    new (class extends UnitElectricResistance {
      constructor() {
        super(
          UnitElectricResistance.SYMBOL.ohms,
          UnitElectricResistance.COEFFICIENT.ohms
        );
      }
    })();

  static milliohms: UnitElectricResistance =
    new (class extends UnitElectricResistance {
      constructor() {
        super(
          UnitElectricResistance.SYMBOL.milliohms,
          UnitElectricResistance.COEFFICIENT.milliohms
        );
      }
    })();

  static microohms: UnitElectricResistance =
    new (class extends UnitElectricResistance {
      constructor() {
        super(
          UnitElectricResistance.SYMBOL.microohms,
          UnitElectricResistance.COEFFICIENT.microohms
        );
      }
    })();

  baseUnit(): Dimension {
    return UnitElectricResistance.ohms;
  }
}
