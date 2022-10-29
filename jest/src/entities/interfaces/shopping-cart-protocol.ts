import { CartItem } from "./carItem";

export interface ShoppingCartProtocol {
  get items(): CartItem[];
  total(): number;
  totalWithDiscount(): number;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  isEmpty(): boolean;
  clear(): void;
}
