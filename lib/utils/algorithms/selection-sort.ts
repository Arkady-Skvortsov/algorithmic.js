import { algorithmPayload } from '../interfaces/algorithm.enum';

class SelectionSort {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public run(array: any[]): algorithmPayload {
    for (let i = 0; i < array.length; i++) {
      let indexMin = i;

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[indexMin]) {
          indexMin = j;
        }

        this.count += 1;
      }

      let element = array[i];
      array[i] = array[indexMin];
      array[indexMin] = element;
    }

    return { array, count: this.count };
  }
}

export { SelectionSort };
