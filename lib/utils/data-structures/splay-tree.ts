import { side, SplayNode } from '../interfaces/data-structure.enum';

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

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public getSize(): number {
    return this.size;
  }

  public print(): Object {
    return {...this.root}
  }
}

const splayTree = new SplayTree();

export { SplayTree };
