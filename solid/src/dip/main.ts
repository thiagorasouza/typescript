import { Checkout } from "./entities/checkout";
import { Message } from "./services/message";
import { ShoppingCart } from "./entities/shoppingCart";
import { Persistency } from "./services/persistency";
import { TenPercentDiscount } from "./strategies/discount";
import { EnterpriseCustomer } from "./entities/customer";

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const message = new Message();
const persistency = new Persistency();
// const customer = new IndividualCustomer("John", "Doe", "123.456.789-00");
const customer = new EnterpriseCustomer("Solar LLC", "01.001.001/0001-00");
const checkout = new Checkout(shoppingCart, message, persistency, customer);

const shoes = { name: "Nike", price: 30.9 };
const tshirt = { name: "Adidas", price: 8.9 };

shoppingCart.addItem({ product: shoes, quantity: 1 });
shoppingCart.addItem({ product: tshirt, quantity: 2 });

checkout.checkout();
