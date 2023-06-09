import Address from "./entity/address";
import Customer from "./entity/customer";
import OrderItem from "./entity/orderItem";
import Order from "./entity/order";

let customer = new Customer("123", "Vitor Duarte");
const address = new Address("Rua 1", "123", "12345-123", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("123", "Item 1", 10);
const item2 = new OrderItem("123", "Item 2 ", 10);
const order = new Order("1", customer._id, [item1, item2]);
