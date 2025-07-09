import { describe, it } from "node:test";
import assert from "node:assert";
import { add } from "./testingWithNodeJS.mjs";

/**
 * case #1 : should add correctly
 * case #2 : should throw an error if string passed on numA parameter
 * case #3 : should throw an error if string passed on numB parameter
 */

describe("Calculator Tests", () => {
  it(" should add correctly", () => {
    // arrange
    const operandA = 1;
    const operandB = 1;

    // action
    const actualValue = add(operandA, operandB);

    // assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  it("should throw an error if string passed on numA parameter", () => {
    const potentialErrorToBeThrew = () => {
      // arrange
      const operandA = "5";
      const operandB = 4;

      // action
      add(operandA, operandB);

      // assert
      assert.throws(potentialErrorToBeThrew, Error);
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
      assert.throws(potentialErrorToBeThrew, Error);
    };
  });
});
