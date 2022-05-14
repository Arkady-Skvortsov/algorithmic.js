import { algorithmPayload } from '../interfaces/algorithm.enum';

class BubbleSort {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public run(array: any[]): algorithmPayload {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j + 1] < array[j]) {
          let elem = array[j];
          array[j] = array[j + 1];
          array[j + 1] = elem;
        }

        this.count += 1;
      }
    }

    return { array: array, count: this.count };
  }
}

export { BubbleSort };
