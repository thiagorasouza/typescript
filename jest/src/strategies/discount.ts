export abstract class Discount {
  protected discount = 0;

  calculate(total: number): number {
    return total * (1 - this.discount);
  }
}

export class TenPercentDiscount extends Discount {
  protected discount = 0.1;
}

export class NoDiscount extends Discount {}
