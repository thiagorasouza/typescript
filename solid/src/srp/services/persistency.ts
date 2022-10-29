import { Order } from "../entities/interfaces/order";

export class Persistency {
  saveOrder(order: Order): void {
    console.log("Saved:", order);
  }
}
