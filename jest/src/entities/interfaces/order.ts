import { CartItem } from "./carItem";

export interface Order {
  items: CartItem[];
  total: number;
}
