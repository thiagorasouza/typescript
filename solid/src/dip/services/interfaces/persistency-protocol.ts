import { Order } from "../../entities/interfaces/order";

export interface PersistencyProtocol {
  saveOrder(order: Order): void;
}
