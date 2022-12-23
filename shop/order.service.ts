import { Order } from "./order";

export class OrderService {
  public getOrderTotal(order: Order) {
    let total = 0;

    order.lineItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    total += total * this.getTaxRate(order.country);

    return total;
  }

  public getTaxRate(country: string) {
    if (country == "US") {
      return 0.07; //US sale tax
    } else if (country == "EU") {
      return 0.2; //European VAT
    } else {
      return 0;
    }
  }
}
