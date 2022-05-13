class CycleSort {
  constructor() {}

  public run(array: any[]): any[] {
    for (
      let currentIndex = 0;
      currentIndex < array.length - 1;
      currentIndex++
    ) {
      let item = array[currentIndex];

      let currentIndexCopy = currentIndex;

      for (let i = currentIndex + 1; i < array.length; i++)
        if (array[i] < item) currentIndexCopy++;

      if (currentIndexCopy == currentIndex) continue;

      while (item == array[currentIndexCopy]) currentIndexCopy++;

      let temp = array[currentIndexCopy];
      array[currentIndexCopy] = item;
      item = temp;

      while (currentIndexCopy != currentIndex) {
        currentIndexCopy = currentIndex;

        for (let i = currentIndex + 1; i < array.length; i++)
          if (array[i] < item) currentIndexCopy++;

        while (item == array[currentIndexCopy]) currentIndexCopy++;

        temp = array[currentIndexCopy];
        array[currentIndexCopy] = item;
        item = temp;
      }
    }

    return array;
  }
}

export { CycleSort };
