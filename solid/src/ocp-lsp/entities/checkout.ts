import { Message } from "../services/message";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shoppingCart";

export class Checkout {
  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly message: Message,
    private readonly persistency: Persistency
  ) {}

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      return this.message.sendMessage("Unable to checkout with an empty cart.");
    }

    const total = this.shoppingCart.totalWithDiscount();

    this.persistency.saveOrder({ items: this.shoppingCart.items, total });
    this.shoppingCart.clear();
    this.message.sendMessage("Order was placed.");
  }
}
