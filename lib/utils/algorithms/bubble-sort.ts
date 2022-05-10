class BubbleSort {
  private array: any[];

  constructor(array: any[]) {
    this.array = array;
  }

  public run() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length; j++) {
        if (this.array[j + 1] < this.array[j]) {
          let elem = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = elem;
        }
      }
    }

    return this.array.join(' ');
  }
}

export { BubbleSort };
