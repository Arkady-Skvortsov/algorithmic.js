import { side } from '../interfaces/data-structure.enum';

class Nodes {
  public key: any;
  public element: any;
  public left: any;
  public right: any;

  constructor(key: any, element: any) {
    this.key = key;
    this.element = element;
    this.right = null;
    this.left = null;
  }
}

class SplayTree {
  private root: any;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  public add(element: any) {}

  public zig() {}

  public zigZig() {}

  public zigZag() {}

  public clear() {}

  public has(element: any) {}

  public find() {}

  public first() {}

  public peek() {}

  public isEmpty() {}

  public getSize() {}

  public print() {}
}

const splayTree = new SplayTree();

export { SplayTree };
