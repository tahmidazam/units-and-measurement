import { Dimension } from "../dimension/dimension";
import { DimensionlessMeasurement } from "../dimensionless-measurement/dimensionless-measurement";

export class Measurement<
  UnitType extends Dimension
> extends DimensionlessMeasurement<UnitType> {
  converted(otherUnit: UnitType): Measurement<UnitType> {
    if (this.unit.isEqual(otherUnit)) {
      return new Measurement(this.value, otherUnit);
    } else {
      const valueInTermsOfBase = this.unit.converter.baseUnitValue(this.value);

      if (otherUnit.isEqual(this.unit.baseUnit())) {
        return new Measurement(valueInTermsOfBase, otherUnit);
      } else {
        const otherValueFromTermsOfBase =
          otherUnit.converter.value(valueInTermsOfBase);

        return new Measurement(otherValueFromTermsOfBase, otherUnit);
      }
    }
  }

  convert(otherUnit: UnitType): void {
    const converted = this.converted(otherUnit);

    this.value = converted.value;
    this.unit = converted.unit;
  }

  formatted(formatOptions?: Measurement.FormatOptions): string {
    const { numberFormatOptions, separator, locales } = formatOptions ?? {};

    // Set style and strip options relating to units.
    const numberFormat = new Intl.NumberFormat(locales, {
      ...(numberFormatOptions ?? {}),
      style: "decimal",
      unit: undefined,
      unitDisplay: undefined,
    });

    return [numberFormat.format(this.value), this.unit.symbol].join(
      separator ?? " "
    );
  }
}

namespace Measurement {
  export interface FormatOptions {
    numberFormatOptions?: Intl.NumberFormatOptions;
    separator?: string;
    locales?: Intl.LocalesArgument;
  }
}
