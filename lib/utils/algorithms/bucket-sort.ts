class BucketSort {
  constructor() {}

  public run(arr: any[]): any[] {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const buckets = Array.from(
      { length: Math.floor((max - min) / arr.length) + 1 },
      () => [],
    );

    arr.forEach((val: never) => {
      buckets[Math.floor((val - min) / arr.length)].push(val);
    });

    return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
  }
}

export { BucketSort };
