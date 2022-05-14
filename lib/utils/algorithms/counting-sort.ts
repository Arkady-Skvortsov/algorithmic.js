import { algorithmPayload } from '../interfaces/algorithm.enum';

class CountingSort {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public run(arr: any[]): algorithmPayload {
    let j = 0;
    let supplementary: any[] = [];

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    for (let i = min; i <= max; i++) {
      supplementary[i] = 0;
    }

    for (let i = 0; i < arr.length; i++) {
      supplementary[arr[i]] += 1;
    }

    for (let i = min; i <= max; i++) {
      this.count += 1;

      while (supplementary[i] > 0) {
        arr[j++] = i;
        supplementary[i] -= 1;
      }
    }

    return { array: arr, count: this.count };
  }
}

export { CountingSort };
