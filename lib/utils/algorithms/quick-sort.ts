class QuickSort {
  private array: any[];

  constructor(array: any[]) {
    this.array = array;
  }

  public run(): any {
    let privotIndex = Math.floor(this.array.length / 2);
    let privot = this.array[privotIndex];
    let less = [];
    let greater = [];

    if (this.array.length <= 1) {
      return this.array;
    }

    for (let i = 0; i < this.array.length; i++) {
      if (i == privotIndex) continue;

      this.array[i] < privot
        ? less.push(this.array[i])
        : greater.push(this.array[i]);
    }

    return [
      ...new QuickSort(less).run(),
      privot,
      ...new QuickSort(greater).run(),
    ];
  }
}

export { QuickSort };
