import { MessageProtocol } from "./interfaces/message-protocol";

export class Message implements MessageProtocol {
  sendMessage(msg: string) {
    console.log("Message:", msg);
  }
}
