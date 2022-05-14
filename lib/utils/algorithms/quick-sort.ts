import { algorithmPayload } from '../interfaces/algorithm.enum';

class QuickSort {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public run(array: any[]): any {
    let privotIndex = Math.floor(array.length / 2);
    let privot = array[privotIndex];
    let less = [];
    let greater = [];

    if (array.length <= 1) {
      return array;
    }

    for (let i = 0; i < array.length; i++) {
      this.count += 1;

      if (i == privotIndex) continue;

      array[i] < privot ? less.push(array[i]) : greater.push(array[i]);
    }

    return {
      array: [...this.run(less), privot, ...this.run(greater)],
      count: this.count,
    };
  }
}

export { QuickSort };
