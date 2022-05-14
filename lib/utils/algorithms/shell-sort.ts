import { algorithmPayload } from '../interfaces/algorithm.enum';

class ShellSort {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public run(arr: any[]): algorithmPayload {
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < n; i += 1) {
        let temp = arr[i];

        let j;
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap];
        }

        arr[j] = temp;
      }
    }

    return { array: arr, count: this.count };
  }
}

export { ShellSort };
