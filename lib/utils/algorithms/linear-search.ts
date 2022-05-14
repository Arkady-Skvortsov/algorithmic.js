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
export { LinearSearch };
