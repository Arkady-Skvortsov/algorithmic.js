import { algorithmPayload } from '../interfaces/algorithm.enum';

class InsertionSort {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public run(array: any[]): algorithmPayload {
    let n = array.length;

    for (let i = 1; i < n; i++) {
      let current = array[i];
      let j = i - 1;

      while (j > -1 && current < array[j]) {
        array[j + 1] = array[j];

        j--;
      }

      array[j + 1] = current;
    }

    return { array, count: this.count };
  }
}

export { InsertionSort };
