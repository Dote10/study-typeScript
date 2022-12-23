import { LineItem } from "./lineItems";
export class Order {
  country: "US" | "EU" | "KO";
  lineItems: LineItem[];
}
