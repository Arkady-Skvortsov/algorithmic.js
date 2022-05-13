class Fibonacci {
  constructor() {}

  public run(num: number): any {
    return num <= 1 ? num : this.run(num - 1) + this.run(num - 2);
  }
}

export { Fibonacci };
