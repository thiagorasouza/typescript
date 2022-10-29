import { Order } from "../entities/interfaces/order";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";

export class Persistency implements PersistencyProtocol {
  saveOrder(order: Order): void {
    console.log("Saved:", order);
  }
}
