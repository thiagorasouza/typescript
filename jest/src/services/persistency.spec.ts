import { CartItem } from "../entities/interfaces/carItem";
import { Order } from "../entities/interfaces/order";
import { Product } from "../entities/interfaces/product";
import { Persistency } from "./persistency";

function mockOrder() {
  const shoes: Product = { name: "Nike", price: 30.9 };
  const tshirt: Product = { name: "Adidas", price: 8.9 };
  const shoeItem: CartItem = { product: shoes, quantity: 1 };
  const tshirtItem: CartItem = { product: tshirt, quantity: 2 };
  const order: Order = {
    items: [shoeItem, tshirtItem],
    total: 43.83,
  };

  return order;
}

describe("Persistency Test Suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return undefined", () => {
    const sut = new Persistency();
    const order = mockOrder();
    const result = sut.saveOrder(order);
    expect(result).toBe(undefined);
  });

  it("should call console log one time", () => {
    const sut = new Persistency();
    const order = mockOrder();
    const consoleSpy = jest.spyOn(console, "log");
    sut.saveOrder(order);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should call console log with 'Saved:'", () => {
    const sut = new Persistency();
    const order = mockOrder();
    const consoleSpy = jest.spyOn(console, "log");
    sut.saveOrder(order);
    expect(consoleSpy).toHaveBeenCalledWith("Saved:", order);
  });
});
