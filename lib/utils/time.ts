import { bigONotationType } from './interfaces/big-o-notation.enum';

class Time {
  private time: number;

  public constructor(fnTime: number) {
    this.time = fnTime;
  }

  private factorial(n: number): any {
    return n === 1 ? 1 : n * this.factorial(n - 1);
  }

  public count(type: bigONotationType) {
    return type === 'O(n)'
      ? this.time
      : type === 'O(n^2)'
      ? this.time ** 2
      : type === 'O(2^n)'
      ? 2 ** this.time
      : type === 'O(n!)'
      ? this.factorial(this.time)
      : type === 'O(log n)'
      ? Math.log(this.time)
      : type === 'O(n log n)'
      ? this.time * Math.log(this.time)
      : null;
  }
}

export { Time };
