import { DoubleLogarithmicTime } from './big-o-notation/double-logarithmic-time';
import { ExponentialTime } from './big-o-notation/exponential-time';
import { FactorialTime } from './big-o-notation/factorial-time';
import { LinearTime } from './big-o-notation/linear-time';
import { LinearithmicTime } from './big-o-notation/linearithmic-time';
import { LogarithmicTime } from './big-o-notation/logarithmic-time';
import { QuadraticTime } from './big-o-notation/quadratic-time';

class BigONotation {
  constructor() {}

  public linearTime(): LinearTime {
    return new LinearTime();
  }

  public doubleLogarithmicTime(): DoubleLogarithmicTime {
    return new DoubleLogarithmicTime();
  }

  public exponentialTime(): ExponentialTime {
    return new ExponentialTime();
  }

  public factorialTime(): FactorialTime {
    return new FactorialTime();
  }

  public linearithmicTime(): LinearithmicTime {
    return new LinearithmicTime();
  }

  public logarithmicTime(): LogarithmicTime {
    return new LogarithmicTime();
  }

  public quadraticTime(): QuadraticTime {
    return new QuadraticTime();
  }

  public checkComplexity(time: number): string {
    const complexityTable = `
    |              O(n)             |               O(n^2)            |             O(log n)              |             O(n log n)             |           O(2^n)                         |              O(n!)                               
    |  ${this.linearTime().check(time)} 
    |  ${this.quadraticTime().check(time)}  | ${this.logarithmicTime().check(time)}      | ${this.linearithmicTime().check(time)} |   ${this.exponentialTime().check(time)}      |  ${this.factorialTime().check(time)}
    `;

    return complexityTable;
  }
}

export { BigONotation };
