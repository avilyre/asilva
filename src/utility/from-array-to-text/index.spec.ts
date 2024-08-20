import { fromArrayToText } from ".";

describe("fromArrayToText", () => {
  it("Should return only string from array", () => {
    const array = ["hello", "world"];
    const expectedResult = "hello world";
    const result = fromArrayToText(array);
    expect(result).to.be.equal(expectedResult);
  });
});
