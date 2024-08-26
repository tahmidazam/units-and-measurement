import { UnitConverter } from "../unit-converter/unit-converter";

export class UnitConverterLinear extends UnitConverter {
  private coefficient: number;
  private constant: number;

  constructor(coefficient: number, constant: number = 0) {
    super();

    this.coefficient = coefficient;
    this.constant = constant;
  }

  baseUnitValue(value: number): number {
    return value * this.coefficient + this.constant;
  }

  value(baseUnitValue: number): number {
    return (baseUnitValue - this.constant) / this.coefficient;
  }
}
