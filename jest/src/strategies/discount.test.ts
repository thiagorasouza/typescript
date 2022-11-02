import { Discount, NoDiscount, TenPercentDiscount } from "./discount";

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe("Discount Test Suite", () => {
  it("should apply no discount", () => {
    const sut = createSut(NoDiscount);
    const result = sut.calculate(50);
    const expected = 50;
    expect(result).toBe(expected);
  });

  it("should apply ten percent discount", () => {
    const sut = createSut(TenPercentDiscount);
    const result = sut.calculate(50);
    const expected = 45;
    expect(result).toBeCloseTo(expected);
  });
});
