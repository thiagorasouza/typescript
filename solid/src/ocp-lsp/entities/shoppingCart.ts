import { Discount } from "../strategies/discount";
import { CartItem } from "./interfaces/carItem";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  get items(): CartItem[] {
    return this._items;
  }

  total(): number {
    return this._items.reduce((subtotal, item) => {
      return subtotal + item.product.price * item.quantity;
    }, 0);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
