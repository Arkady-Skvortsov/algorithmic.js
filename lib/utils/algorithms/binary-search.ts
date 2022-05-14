class BinarySearch {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public run(array: any[], item: any) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
      this.count += 1;

      middle = Math.floor((start + end) / 2);

      array[middle] === item
        ? ((found = true), (position = middle), position)
        : item < array[middle]
        ? (end = middle - 1)
        : (start = middle + 1);
    }

    return { index: position, time: this.count };
  }
}

export { BinarySearch };
