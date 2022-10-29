export abstract class Discount {
  abstract calculate(total: number): number;
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;

  calculate(total: number): number {
    return total * (1 - this.discount);
  }
}
