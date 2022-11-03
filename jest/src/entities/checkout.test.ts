import { MessageProtocol } from "../services/interfaces/message-protocol";
import { PersistencyProtocol } from "../services/interfaces/persistency-protocol";
import { Checkout } from "./checkout";
import { CartItem } from "./interfaces/carItem";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";

const createShoppingCartMock = (): ShoppingCartProtocol => {
  class ShoppingCartMock implements ShoppingCartProtocol {
    get items(): CartItem[] {
      return [] as CartItem[];
    }
    total(): number {
      return 0;
    }
    totalWithDiscount(): number {
      return 0;
    }
    addItem(): void {
      return;
    }
    removeItem(): void {
      return;
    }
    isEmpty(): boolean {
      return true;
    }
    clear(): void {
      return;
    }
  }

  return new ShoppingCartMock();
};

const createMessageMock = (): MessageProtocol => {
  class MessageMock implements MessageProtocol {
    sendMessage() {
      return;
    }
  }

  return new MessageMock();
};

const createPersistencyMock = (): PersistencyProtocol => {
  class PersistencyMock implements PersistencyProtocol {
    saveOrder(): void {
      return;
    }
  }

  return new PersistencyMock();
};

const createCustomerMock = (): CustomerOrder => {
  class CustomerMock implements CustomerOrder {
    getName(): string {
      return "";
    }
    getID(): string {
      return "";
    }
  }

  return new CustomerMock();
};

const createSut = (): {
  sut: Checkout;
  shoppingCartMock: ShoppingCartProtocol;
  messageMock: MessageProtocol;
  persistencyMock: PersistencyProtocol;
  customerMock: CustomerOrder;
} => {
  const shoppingCartMock = createShoppingCartMock();
  const messageMock = createMessageMock();
  const persistencyMock = createPersistencyMock();
  const customerMock = createCustomerMock();

  const sut = new Checkout(
    shoppingCartMock,
    messageMock,
    persistencyMock,
    customerMock
  );

  return {
    sut,
    shoppingCartMock,
    messageMock,
    persistencyMock,
    customerMock,
  };
};

describe("Checkout Test Suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should check if the cart is empty", () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartSpy = jest.spyOn(shoppingCartMock, "isEmpty");
    sut.checkout();
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1);
  });

  it("should not checkout if the cart is empty", () => {
    const { sut, shoppingCartMock, messageMock } = createSut();
    jest.spyOn(shoppingCartMock, "isEmpty").mockReturnValueOnce(true);
    const messageSpy = jest.spyOn(messageMock, "sendMessage");
    sut.checkout();
    expect(messageSpy).toBeCalledWith("Unable to checkout with an empty cart.");
  });

  it("should save order", () => {
    const { sut, persistencyMock, shoppingCartMock } = createSut();
    jest.spyOn(shoppingCartMock, "isEmpty").mockReturnValueOnce(false);
    const persistencySpy = jest.spyOn(persistencyMock, "saveOrder");
    sut.checkout();
    expect(persistencySpy).toHaveBeenCalledTimes(1);
    expect(persistencySpy).toHaveBeenCalledWith({
      items: shoppingCartMock.items,
      total: shoppingCartMock.totalWithDiscount(),
    });
  });

  it("should clear the shopping cart", () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartSpy = jest.spyOn(shoppingCartMock, "clear");
    jest.spyOn(shoppingCartMock, "isEmpty").mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1);
  });

  it("should announce that the order was placed", () => {
    const { sut, shoppingCartMock, messageMock } = createSut();
    jest.spyOn(shoppingCartMock, "isEmpty").mockReturnValueOnce(false);
    const messageSpy = jest.spyOn(messageMock, "sendMessage");
    sut.checkout();
    expect(messageSpy).toBeCalledWith("Order was placed.");
  });
});
