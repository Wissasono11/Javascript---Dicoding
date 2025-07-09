import { describe, it, expect } from "bun:test";
import { add } from "./testingWithBunJS.mjs";
/**
 * case #1 : should add correctly
 * case #2 : should throw an error if string passed on numA parameter
 * case #3 : should throw an error if string passed on numB parameter
 */

describe("Calculator", () => {
  it("should add correctly", () => {
    // arrange
    const operandA = 1;
    const operandB = 1;

    // action
    const actualValue = add(operandA, operandB);

    // assert
    const expectedValue = 2;
    expect(actualValue).toBe(expectedValue);
  });

  it("should throw an error if string passed on numA parameter", () => {
    const potentialErrorToBeThrew = () => {
      // arrange
      const operandA = "5";
      const operandB = 4;

      // action
      add(operandA, operandB);

      // assert
      expect(potentialErrorToBeThrew).toThrow(Error);
    };
  });

  it("should throw an error if string passed on numB parameter", () => {
    const potentialErrorToBeThrew = () => {
      // arrange
      const operandA = 10;
      const operandB = "8";

      // action
      add(operandA, operandB);

      // assert
      expect(potentialErrorToBeThrew).toThrow(Error);
    };
  });
});
