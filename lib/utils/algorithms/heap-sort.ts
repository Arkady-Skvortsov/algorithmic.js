import { BigONotation } from '../big-o-notation';
import { algorithmPayload } from '../interfaces/algorithm.enum';

class HeapSort {
  private count: number;

  constructor() {
    this.count = 0;
  }

  private heapify(array: any[], size: number, i: number) {
    let max = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < size && array[left] > array[max]) max = left;

    if (right < size && array[right] > array[max]) max = right;

    if (max != i) {
      let temp = array[i];
      array[i] = array[max];
      array[max] = temp;

      this.heapify(array, size, max);
    }
  }

  public run(array: any[]): algorithmPayload {
    let size = array.length;

    for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
      this.heapify(array, size, i);
    }

    for (let i = size - 1; i >= 0; i--) {
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;

      this.heapify(array, i, 0);
    }

    return { array, count: this.count };
  }
}

export { HeapSort };
