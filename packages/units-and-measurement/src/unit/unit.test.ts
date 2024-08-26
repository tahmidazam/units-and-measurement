import { Unit } from "./unit";

describe("Unit", () => {
  describe("isEqual()", () => {
    it("returns false for null comparison", () => {
      // Arrange
      const unit = new Unit("kg");

      // Act
      const result = unit.isEqual(null);

      // Assert
      expect(result).toBe(false);
    });

    it("returns false for non-Unit class comparison", () => {
      // Arrange
      const unit = new Unit("kg");

      // Act
      const result = unit.isEqual({});

      // Assert
      expect(result).toBe(false);
    });

    it("returns true for same instance comparison", () => {
      // Arrange
      const unit1 = new Unit("kg");

      // Act
      const result = unit1.isEqual(unit1);

      expect(result).toBe(true);
    });

    it("returns false for different instance constructed with a different symbol comparison", () => {
      // Arrange
      const unit1 = new Unit("kg");
      const unit2 = new Unit("g");

      // Act
      const result = unit1.isEqual(unit2);

      // Assert
      expect(result).toBe(false);
    });

    it("returns true for different instance constructed with the same symbol comparison", () => {
      // Arrange
      const unit1 = new Unit("kg");
      const unit2 = new Unit("kg");

      // Act
      const result = unit1.isEqual(unit2);

      // Assert
      expect(result).toBe(true);
    });
  });
});
