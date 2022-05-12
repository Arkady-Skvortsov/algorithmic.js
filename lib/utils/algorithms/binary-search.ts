class BinarySearch {
  constructor() {}

  public run(array: any[], item: any) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
      middle = Math.floor((start + end) / 2);

      array[middle] === item
        ? ((found = true), (position = middle), position)
        : item < array[middle]
        ? (end = middle - 1)
        : (start = middle + 1);
    }

    return position;
  }
}

export { BinarySearch };
