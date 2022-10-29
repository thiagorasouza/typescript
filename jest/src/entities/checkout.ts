import { MessageProtocol } from "../services/interfaces/message-protocol";
import { PersistencyProtocol } from "../services/interfaces/persistency-protocol";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";

export class Checkout {
  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder
  ) {}

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      return this.message.sendMessage("Unable to checkout with an empty cart.");
    }

    const total = this.shoppingCart.totalWithDiscount();

    this.persistency.saveOrder({ items: this.shoppingCart.items, total });
    this.shoppingCart.clear();
    this.message.sendMessage("Order was placed.");
    console.log(
      `Customer: ${this.customer.getName()} with ID ${this.customer.getID()}`
    );
  }
}
