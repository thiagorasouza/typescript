import { Discount } from "../strategies/discount";
import { CartItem } from "./interfaces/carItem";
import { Product } from "./interfaces/product";
import { ShoppingCart } from "./shoppingCart";

const createDiscountMock = (): Discount => {
  class DiscountMock extends Discount {
    protected discount = 0;
  }

  return new DiscountMock();
};

const createSut = (): { sut: ShoppingCart; discount: Discount } => {
  const discount = createDiscountMock();
  const sut = new ShoppingCart(discount);
  return { sut, discount };
};

const createSutWithTwoItems = (): { sut: ShoppingCart; discount: Discount } => {
  const { sut, discount } = createSut();
  sut.addItem(shoeItemMock);
  sut.addItem(tshirtItemMock);
  return { sut, discount };
};

const shoeMock: Product = { name: "Nike", price: 30.9 };
const tshirtMock: Product = { name: "Adidas", price: 8.9 };
const shoeItemMock: CartItem = { product: shoeMock, quantity: 1 };
const tshirtItemMock: CartItem = { product: tshirtMock, quantity: 2 };

describe("ShoppingCart Test Suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be empty on creation", () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toEqual(true);
  });

  it("should contain the item that was added", () => {
    const { sut } = createSut();
    sut.addItem(shoeItemMock);
    expect(sut.items).toContain(shoeItemMock);
  });

  it("should contain 1 item when 1 item is added", () => {
    const { sut } = createSut();
    sut.addItem(shoeItemMock);
    expect(sut.items.length).toBe(1);
  });

  it("should contain 100 items when 100 items are added (up to 100)", () => {
    const { sut } = createSut();
    [...Array(100)].map(() => sut.addItem(shoeItemMock));
    expect(sut.items.length).toBe(100);
  });

  it("should not contain the item that was removed", () => {
    const { sut } = createSutWithTwoItems();
    sut.removeItem(1);
    expect(sut.items).not.toContain(tshirtItemMock);
  });

  it("should contain 1 item less when an item is removed", () => {
    const { sut } = createSutWithTwoItems();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });

  it("should be empty when cleared", () => {
    const { sut } = createSut();
    sut.clear();
    expect(sut.isEmpty()).toEqual(true);
  });

  it("should return the total price", () => {
    const { sut } = createSutWithTwoItems();
    expect(sut.total()).toBeCloseTo(48.7);
  });

  it("should return the discounted price", () => {
    const { sut } = createSutWithTwoItems();
    expect(sut.total()).toBeCloseTo(48.7);
  });

  it("should call discount.calculate to return the discounted price", () => {
    const { sut, discount } = createSutWithTwoItems();
    const discountSpy = jest.spyOn(discount, "calculate");
    sut.totalWithDiscount();
    expect(discountSpy).toHaveBeenCalledTimes(1);
  });

  it("should call discount.calculate to with the total price", () => {
    const { sut, discount } = createSutWithTwoItems();
    const discountSpy = jest.spyOn(discount, "calculate");
    sut.totalWithDiscount();
    expect(discountSpy).toHaveBeenCalledWith(sut.total());
  });
});
