import assert from "node:assert";
import { describe, it } from "node:test";
import sum from "./index.js";

/**
 * case #1: Should return the sum of two positive numbers
 * case #2: Should return 0 if either argument is not a number
 * case #3: Should return 0 if either argument is negative
 * case #4: Should return 0 if both arguments are not numbers
 * case #5: Should return 0 if both arguments are negative
 */

describe("Addtion Function Tests But More Complex", () => {
  it("Should return the sum of two positive numbers", () => {
    // Arrange
    const operandA = 99;
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 100;
    assert.equal(actualValue, expectedValue);
  });

  it("Should return 0 if either argument is not a number", () => {
    // Arrange
    const operandA = "99";
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it("Should return 0 if either argument is negative", () => {
    // Arrange
    const operandA = -99;
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it("Should return 0 if both arguments are zero", () => {
    // Arrange
    const operandA = 0;
    const operandB = 0;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it("Should return the other value if one argument is zero the other is positive", () => {
    // Arrange
    const operandA = 0;
    const operandB = 100;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 100;
    assert.equal(actualValue, expectedValue);
  });
});
