import assert from "node:assert";
import { describe, it } from "node:test";
import { sum } from "./index.js";

/**
 * case #1 : should add correctly
 * case #2 : should throw an error if string passed on numA parameter
 * case #3 : should throw an error if string passed on numB parameter
 * case #4 : should throw an error if both parameters are strings
 * case #5 : should throw an error if no parameters are passed
 */

describe("Addition Function Tests", () => {
  it("should add correctly", () => {
    // Arrange
    const operandA = 11;
    const operandB = 9;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 20;
    assert.equal(actualValue, expectedValue);
  });

  it("should throw an error if string passed on numA parameter", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = "21";
      const operandB = 4;

      // Action
      sum(operandA, operandB);

      // Assert
      assert.throws(potentialErrorToBeThrew, Error);
    };
  });

  it("should throw an error if string passed on numB parameter", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = "8";

      // Action
      sum(operandA, operandB);

      // Assert
      assert.throws(potentialErrorToBeThrew, Error);
    };
  });

  it("should throw an error if both parameters are strings", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = "10";
      const operandB = "8";

      // Action
      sum(operandA, operandB);

      // Assert
      assert.throws(potentialErrorToBeThrew, Error);
    };
  });

  it("should throw an error if no parameters are passed", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      // No parameters

      // Action
      sum();

      // Assert
      assert.throws(potentialErrorToBeThrew, Error);
    };
  });
})
