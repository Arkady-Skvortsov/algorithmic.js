import { heapType } from '../interfaces/data-structure.enum';

class HeapNode {
  public element: any;
  public left: any;
  public right: any;

  constructor(element: any) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class Heap {
  private root: any;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  public add(element: any) {
    const newNode = new HeapNode(element);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current: any = this.root;

    while (current) {
      if (element === current.element) return;

      if (element < current.element) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }

      this.size++;
    }
  }

  public getRootOfHeap(): any {
    return this.root.element;
  }

  public remove(element: any): void {
    this.root = this.removeTreeNode(this.root, element);
  }

  private removeTreeNode(current: any, element: any): any {
    if (current === null) return current;

    if (element === current.element) {
      if (current.left === null && current.right === null) {
        return null;
      } else if (current.left === null) {
        return current.right;
      } else if (current.right === null) {
        return current.left;
      } else {
        const tempNode = this.findSmallestTreeNode(current.right);
        current.element = tempNode.element;

        current.right = this.removeTreeNode(current.right, tempNode.element);
        return current;
      }
    } else if (element < current.element) {
      current.left = this.removeTreeNode(current.left, element);
      return current;
    } else {
      current.right = this.removeTreeNode(current.right, element);
      return current;
    }
  }

  private findSmallestTreeNode(element: any): any {
    while (element.left !== null) element = element.left;

    return element;
  }

  public find(element: any): any {
    if (this.root === null) return false;

    let current = this.root;

    while (current.element !== element) {
      if (element < current.element) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) return null;
    }

    return { ...current };
  }

  public clear(): void {
    this.root = null;
  }

  public turnIn(options: heapType) {
    return this;
  }

  public has(element: any): boolean {
    return this.find(element) ? true : false;
  }

  public getSize(): number {
    return this.size - 1;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public print(): Object {
    return { ...this.root };
  }
}

export { Heap };
