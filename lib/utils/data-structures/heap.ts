class HeapNode {
  private element: any;
  private left: any;
  private right: any;

  constructor(element: any) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class Heap {
  private root: null | any;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  public add(element: any, type: 'min' | 'max') {}

  public remove(element: any, type: 'min' | 'max') {}

  public find() {}

  public clear() {}

  public turnIn(type: 'min' | 'max') {}

  public getSize() {}

  public isEmpty() {}

  public print() {}
}

const heap = new Heap();

export { Heap };
