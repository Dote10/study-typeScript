import { Food } from "./Food";

export class Cat {
  energy;

  public eat(s: Food) {
    this.energy += s.getNutrition();
  }
}
