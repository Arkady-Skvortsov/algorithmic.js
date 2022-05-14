import { bigONotationType } from './interfaces/big-o-notation.enum';

class BigONotation {
  private time: number;

  constructor(fnTime: number) {
    this.time = fnTime;
  }

  private factorial(n: number): any {
    return n === 1 ? 1 : n * this.factorial(n - 1);
  }

  public check(type: bigONotationType) {
    return type === 'LINEAR-TIME'
      ? this.time
      : type === 'QUADRATIC-TIME'
      ? this.time ** 2
      : type === 'EXPONENTIAL-TIME'
      ? 2 ** this.time
      : type === 'FACTORIAL-TIME'
      ? this.factorial(this.time)
      : type === 'LOGARITHMIC-TIME'
      ? Math.log(this.time)
      : type === 'LINEARITHMIC-TIME'
      ? this.time * Math.log(this.time)
      : type === 'DOUBLE-LOGARITHMIC-TIME'
      ? Math.log(Math.log(this.time))
      : 'What?';
  }

  public checkComplexity(): string {
    const complexityTable = `
    |              O(n)             |               O(n^2)            |             O(log n)              |             O(n log n)             |           O(2^n)                         |              O(n!)                               
    | ${this.check('LINEAR-TIME')}  | ${this.check(
      'QUADRATIC-TIME',
    )} | ${this.check('LOGARITHMIC-TIME')} | ${this.check(
      'LINEARITHMIC-TIME',
    )} |   ${this.check('EXPONENTIAL-TIME')}      |  ${this.check(
      'FACTORIAL-TIME',
    )}
    `;

    return complexityTable;
  }
}

export { BigONotation };
