import { Dimension } from "../dimension/dimension";
import { UnitConverterLinear } from "../unit-converter-linear/unit-converter-linear";

export class UnitInformationStorage extends Dimension {
  static SYMBOL = {
    bytes: "B",
    bits: "bit",
    nibbles: "nibble",
    yottabytes: "YB",
    zettabytes: "ZB",
    exabytes: "EB",
    petabytes: "PB",
    terabytes: "TB",
    gigabytes: "GB",
    megabytes: "MB",
    kilobytes: "kB",
    yottabits: "Yb",
    zettabits: "Zb",
    exabits: "Eb",
    petabits: "Pb",
    terabits: "Tb",
    gigabits: "Gb",
    megabits: "Mb",
    kilobits: "kb",
    yobibytes: "YiB",
    zebibytes: "ZiB",
    exbibytes: "EiB",
    pebibytes: "PiB",
    tebibytes: "TiB",
    gibibytes: "GiB",
    mebibytes: "MiB",
    kibibytes: "KiB",
    yobibits: "Yib",
    zebibits: "Zib",
    exbibits: "Eib",
    pebibits: "Pib",
    tebibits: "Tib",
    gibibits: "Gib",
    mebibits: "Mib",
    kibibits: "Kib",
  } as const;

  static COEFFICIENT = {
    bytes: 8.0,
    bits: 1.0,
    nibbles: 4.0,
    yottabytes: 8.0 * Math.pow(1000.0, 8.0),
    zettabytes: 8.0 * Math.pow(1000.0, 7.0),
    exabytes: 8.0 * Math.pow(1000.0, 6.0),
    petabytes: 8.0 * Math.pow(1000.0, 5.0),
    terabytes: 8.0 * Math.pow(1000.0, 4.0),
    gigabytes: 8.0 * Math.pow(1000.0, 3.0),
    megabytes: 8.0 * Math.pow(1000.0, 2.0),
    kilobytes: 8.0 * 1000,
    yottabits: Math.pow(1000.0, 8.0),
    zettabits: Math.pow(1000.0, 7.0),
    exabits: Math.pow(1000.0, 6.0),
    petabits: Math.pow(1000.0, 5.0),
    terabits: Math.pow(1000.0, 4.0),
    gigabits: Math.pow(1000.0, 3.0),
    megabits: Math.pow(1000.0, 2.0),
    kilobits: 1000.0,
    yobibytes: 8 * Math.pow(1024.0, 8.0),
    zebibytes: 8 * Math.pow(1024.0, 7.0),
    exbibytes: 8 * Math.pow(1024.0, 6.0),
    pebibytes: 8 * Math.pow(1024.0, 5.0),
    tebibytes: 8 * Math.pow(1024.0, 4.0),
    gibibytes: 8 * Math.pow(1024.0, 3.0),
    mebibytes: 8 * Math.pow(1024.0, 2.0),
    kibibytes: 8 * 1024.0,
    yobibits: Math.pow(1024.0, 8.0),
    zebibits: Math.pow(1024.0, 7.0),
    exbibits: Math.pow(1024.0, 6.0),
    pebibits: Math.pow(1024.0, 5.0),
    tebibits: Math.pow(1024.0, 4.0),
    gibibits: Math.pow(1024.0, 3.0),
    mebibits: Math.pow(1024.0, 2.0),
    kibibits: 1024.0,
  } as const;

  private constructor(symbol: string, coefficient: number) {
    super(symbol, new UnitConverterLinear(coefficient, 0));
  }

  static bytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.bytes,
          UnitInformationStorage.COEFFICIENT.bytes
        );
      }
    })();

  static bits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.bits,
          UnitInformationStorage.COEFFICIENT.bits
        );
      }
    })();

  static nibbles: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.nibbles,
          UnitInformationStorage.COEFFICIENT.nibbles
        );
      }
    })();

  static yottabytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.yottabytes,
          UnitInformationStorage.COEFFICIENT.yottabytes
        );
      }
    })();

  static zettabytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.zettabytes,
          UnitInformationStorage.COEFFICIENT.zettabytes
        );
      }
    })();

  static exabytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.exabytes,
          UnitInformationStorage.COEFFICIENT.exabytes
        );
      }
    })();

  static petabytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.petabytes,
          UnitInformationStorage.COEFFICIENT.petabytes
        );
      }
    })();

  static terabytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.terabytes,
          UnitInformationStorage.COEFFICIENT.terabytes
        );
      }
    })();

  static gigabytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.gigabytes,
          UnitInformationStorage.COEFFICIENT.gigabytes
        );
      }
    })();

  static megabytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.megabytes,
          UnitInformationStorage.COEFFICIENT.megabytes
        );
      }
    })();

  static kilobytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.kilobytes,
          UnitInformationStorage.COEFFICIENT.kilobytes
        );
      }
    })();

  static yottabits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.yottabits,
          UnitInformationStorage.COEFFICIENT.yottabits
        );
      }
    })();

  static zettabits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.zettabits,
          UnitInformationStorage.COEFFICIENT.zettabits
        );
      }
    })();

  static exabits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.exabits,
          UnitInformationStorage.COEFFICIENT.exabits
        );
      }
    })();

  static petabits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.petabits,
          UnitInformationStorage.COEFFICIENT.petabits
        );
      }
    })();

  static terabits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.terabits,
          UnitInformationStorage.COEFFICIENT.terabits
        );
      }
    })();

  static gigabits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.gigabits,
          UnitInformationStorage.COEFFICIENT.gigabits
        );
      }
    })();

  static megabits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.megabits,
          UnitInformationStorage.COEFFICIENT.megabits
        );
      }
    })();

  static kilobits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.kilobits,
          UnitInformationStorage.COEFFICIENT.kilobits
        );
      }
    })();

  static yobibytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.yobibytes,
          UnitInformationStorage.COEFFICIENT.yobibytes
        );
      }
    })();

  static zebibytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.zebibytes,
          UnitInformationStorage.COEFFICIENT.zebibytes
        );
      }
    })();

  static exbibytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.exbibytes,
          UnitInformationStorage.COEFFICIENT.exbibytes
        );
      }
    })();

  static pebibytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.pebibytes,
          UnitInformationStorage.COEFFICIENT.pebibytes
        );
      }
    })();

  static tebibytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.tebibytes,
          UnitInformationStorage.COEFFICIENT.tebibytes
        );
      }
    })();

  static gibibytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.gibibytes,
          UnitInformationStorage.COEFFICIENT.gibibytes
        );
      }
    })();

  static mebibytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.mebibytes,
          UnitInformationStorage.COEFFICIENT.mebibytes
        );
      }
    })();

  static kibibytes: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.kibibytes,
          UnitInformationStorage.COEFFICIENT.kibibytes
        );
      }
    })();

  static yobibits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.yobibits,
          UnitInformationStorage.COEFFICIENT.yobibits
        );
      }
    })();

  static zebibits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.zebibits,
          UnitInformationStorage.COEFFICIENT.zebibits
        );
      }
    })();

  static exbibits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.exbibits,
          UnitInformationStorage.COEFFICIENT.exbibits
        );
      }
    })();

  static pebibits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.pebibits,
          UnitInformationStorage.COEFFICIENT.pebibits
        );
      }
    })();

  static tebibits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.tebibits,
          UnitInformationStorage.COEFFICIENT.tebibits
        );
      }
    })();

  static gibibits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.gibibits,
          UnitInformationStorage.COEFFICIENT.gibibits
        );
      }
    })();

  static mebibits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.mebibits,
          UnitInformationStorage.COEFFICIENT.mebibits
        );
      }
    })();

  static kibibits: UnitInformationStorage =
    new (class extends UnitInformationStorage {
      constructor() {
        super(
          UnitInformationStorage.SYMBOL.kibibits,
          UnitInformationStorage.COEFFICIENT.kibibits
        );
      }
    })();

  baseUnit(): Dimension {
    return UnitInformationStorage.bits;
  }
}
