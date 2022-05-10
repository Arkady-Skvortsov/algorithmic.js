class LinearSearch {
  private array: any[];

  constructor(array: any[]) {
    this.array = array;
  }

  public run(item: any) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === item) return i;
    }

    return "You don't have that item in you'r array";
  }
}

export { LinearSearch };
