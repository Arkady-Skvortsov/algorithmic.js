import { BigONotation } from '../big-o-notation';

class LinearSearch {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public run(array: any[], item: any): any {
    for (let i = 0; i < array.length; i++) {
      this.count += 1;

      if (array[i] === item) return { index: i, time: this.count };
    }

    return;
  }
}

const linearSearch = new LinearSearch();

const bigONotation = new BigONotation(
  linearSearch.run([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 8).time,
);

console.log(bigONotation.checkComplexity());

export { LinearSearch };
