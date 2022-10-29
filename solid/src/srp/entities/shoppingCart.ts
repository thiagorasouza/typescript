import { CartItem } from "./interfaces/carItem";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  get items(): CartItem[] {
    return this._items;
  }

  get total(): number {
    return this._items.reduce((subtotal, item) => {
      return subtotal + item.product.price * item.quantity;
    }, 0);
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
