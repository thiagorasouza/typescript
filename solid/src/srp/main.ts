import { Checkout } from "./entities/checkout";
import { Message } from "./services/message";
import { ShoppingCart } from "./entities/shoppingCart";
import { Persistency } from "./services/persistency";

const shoppingCart = new ShoppingCart();
const message = new Message();
const persistency = new Persistency();
const checkout = new Checkout(shoppingCart, message, persistency);

const shoes = { name: "Nike", price: 30.9 };
const tshirt = { name: "Adidas", price: 8.9 };

shoppingCart.addItem({ product: shoes, quantity: 1 });
shoppingCart.addItem({ product: tshirt, quantity: 2 });

checkout.checkout();
