import { bigONotationType } from './interfaces/big-o-notation.enum';

class BigONotation {
  constructor() {}

  private factorial(n: number): any {
    return n === 1 ? 1 : n * this.factorial(n - 1);
  }

  public check(time: number, type: bigONotationType) {
    return type === 'LINEAR-TIME'
      ? time
      : type === 'QUADRATIC-TIME'
      ? time ** 2
      : type === 'EXPONENTIAL-TIME'
      ? 2 ** time
      : type === 'FACTORIAL-TIME'
      ? this.factorial(time)
      : type === 'LOGARITHMIC-TIME'
      ? Math.log(time)
      : type === 'LINEARITHMIC-TIME'
      ? time * Math.log(time)
      : type === 'DOUBLE-LOGARITHMIC-TIME'
      ? Math.log(Math.log(time))
      : 'What?';
  }

  public checkComplexity(time: number): string {
    const complexityTable = `
    |              O(n)             |               O(n^2)            |             O(log n)              |             O(n log n)             |           O(2^n)                         |              O(n!)                               
    |  ${this.check(time, 'LINEAR-TIME')} 
    |  ${this.check(time, 'QUADRATIC-TIME')}  | ${this.check(
      time,
      'LOGARITHMIC-TIME',
    )}      | ${this.check(time, 'LINEARITHMIC-TIME')} |   ${this.check(
      time,
      'EXPONENTIAL-TIME',
    )}      |  ${this.check(time, 'FACTORIAL-TIME')}
    `;

    return complexityTable;
  }
}

export { BigONotation };
