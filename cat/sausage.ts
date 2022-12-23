import { Food } from "./food";
export class Sausage implements Food {
  nutrition: string;

  public setNutrition(n: string) {
    this.nutrition = n;
  }

  public getNutrition(): Food {
    return new Sausage();
  }

  public getColor() {}

  public getExpiration() {}
}
