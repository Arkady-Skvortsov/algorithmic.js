import { algorithmPayload } from '../interfaces/algorithm.enum';

class RadixSort {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public run(arr: any[]): algorithmPayload {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;

    while (divisor < maxNum) {
      let buckets: any = [...Array(10)].map(() => []);

      for (let num of arr) {
        this.count++;
        buckets[Math.floor((num % divisor) / (divisor / 10))]?.push(num);
      }

      arr = [].concat.apply([], buckets);

      divisor *= 10;
    }

    return { array: arr, count: this.count };
  }
}

export { RadixSort };
