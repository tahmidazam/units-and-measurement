import { Unit } from "../unit/unit";

export class DimensionlessMeasurement<UnitType extends Unit> {
  public unit: UnitType;
  public value: number;

  constructor(value: number, unit: UnitType) {
    this.value = value;
    this.unit = unit;
  }
}
