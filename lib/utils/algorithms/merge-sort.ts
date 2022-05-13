class MergeSort {
  constructor() {}

  public run(array: any[]): any[] {
    const half = array.length / 2;

    if (array.length < 2) {
      return array;
    }

    const left = array.splice(0, half);

    return this.merge(this.run(left), this.run(array));
  }

  private merge(first: any[], second: any[]): any[] {
    const sortedArray = [];

    while (first.length && second.length) {
      first[0] < second[0]
        ? sortedArray.push(first.shift())
        : sortedArray.push(second.shift());
    }

    return [...sortedArray, ...first, ...second];
  }
}

export { MergeSort };
