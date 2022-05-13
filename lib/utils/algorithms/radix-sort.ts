class RadixSort {
  constructor() {}

  public run(arr: any[]): any[] {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;

    while (divisor < maxNum) {
      let buckets: any = [...Array(10)].map(() => []);

      for (let num of arr) {
        buckets[Math.floor((num % divisor) / (divisor / 10))]?.push(num);
      }

      arr = [].concat.apply([], buckets);

      divisor *= 10;
    }
    return arr;
  }
}

export { RadixSort };
