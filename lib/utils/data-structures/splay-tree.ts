import { side, SplayNode } from '../interfaces/data-structure.enum';

class SplayTree {
  private root: any;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  public splay(key: any): any {
    if (this.isEmpty()) {
         return;
        }
        var dummy, left, right;
        dummy = left = right = new SplayNode(null, null);
        var current = this.root;
        while (true) {
          if (key < current.key) {
            if (!current.left) {
              break;
            }
            if (key < current.left.key) {
             var tmp = current.left;
              current.left = tmp.right;
              tmp.right = current;
              current = tmp;
              if (!current.left) {
                break;
              }
            }
            right.left = current;
            right = current;
            current = current.left;
          } else if (key > current.key) {
            if (!current.right) {
              break;
            }
            if (key > current.right.key) {
              var tmp = current.right;
              current.right = tmp.left;
              tmp.left = current;
              current = tmp;
              if (!current.right) {
                break;
              }
            }
            left.right = current;
            left = current;
            current = current.right;
          } else {
            break;
          }
        }
        left.right = current.left;
        right.left = current.right;
        current.left = dummy.right;
          current.right = dummy.left;
          this.root = current;
  }

  public zig() {}

  public zigZig() {}

  public zigZag() {}

  public clear(): void {
    this.root = null;
  }

  public has(element: any): boolean {
    return this.find(element) ? true : false;
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

  public findBiggestTreeNode() {}

  public findSmallestTreeNode() {}

  public removeSmallestTreeNode() {}

  public removeBiggestTreeNode() {}

  public breadthFirstSearch() {}
  
  public summOfTree() {

  }

  public preOrder(): any[] {
    let visited: any[] = [];
    let current = this.root;

    let traverse = (node: any) => {
      visited.push(node.element);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);

    return visited;
  }

  public postOrder(): any[] {
    let visited: any[] = [];
    let current = this.root;

    let traverse = (node: any) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.element);
    };

    traverse(current);

    return visited;
  }

  public inOrder(): any[] {
    let visited: any[] = [];
    let current = this.root;

    let traverse = (node: any) => {
      if (node.left) traverse(node.left);
      visited.push(node.element);
      if (node.right) traverse(node.right);
    };

    traverse(current);

    return visited;
  }

  
  public getRootOfTree() {
    return this.root.element;
  }

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
