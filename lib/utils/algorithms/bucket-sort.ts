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

const bucketSort = new BucketSort();

console.log(
  bucketSort.run([1, -1, -20, -90, 200, 10, 9, 8, 20, 15, 100, 54, 28]),
);

export { BucketSort };
