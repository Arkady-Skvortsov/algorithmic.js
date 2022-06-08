import { side, SplayNode } from '../interfaces/data-structure.enum';

class SplayTree {
  private root: any;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }
  
  public add(key: any, element: any): void {
    if (this.isEmpty()) {
        this.root = new SplayNode(key, element);
    }
    // Splay on the key to move the last node on the search path for
    // the key to the root of the tree.
    this.splay(key);
    
    if (this.root.key == key) return;
    
    let node = new SplayNode(key, element);

      if (key > this.root.key) {
        node.left = this.root;
        node.right = this.root.right;
        this.root.right = null;
      } else {
        node.right = this.root;
        node.left = this.root.left;
        this.root.left = null;
      }
    
    this.root = node; 
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

  public zig(root = this.root) {
      
  }

  public zigZig(root = this.root) {}

  public zigZag(root = this.root) {}

  public clear(): void {
    this.root = null;
  }

  public rightRotate(node: any): any {
    node = this.find(node);
    let tmp = node.left;

    node.left = tmp.right;
    tmp.right = node;

    return tmp;
  }

  public leftRotate(node: any): any {
    node = this.find(node);
    let tmp = node.right;

    node.right = tmp.left;
    tmp.left = node;

    return tmp;
  }

  public has(element: any): boolean {
    return this.find(element) ? true : false;
  }

  public find(key: any): any {
    if (this.root === null) return false;

    let current = this.root;

    while (current.key !== key) {
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) return null;
    }

    return { ...current };
  }

  public findBiggestTreeNode(): any {
    return Math.max(...this.breadthFirstSearch())
  }

  public next(side: side): any {
    let current = this.root;

    if (side === 'left') {
      if (current.left !== null) {
        current = current.left;

        this.root = current;

        return this;
      }
    }

    if (current.right !== null) {
      current = current.right;

      this.root = current;

      return this;
    }
  }

  public findSmallestTreeNode(): any {
    return Math.min(...this.breadthFirstSearch());
  }

  public removeSmallestTreeNode(): void {
    const smallestTree = Math.min(...this.breadthFirstSearch());

    this.root = this.removeTreeNode(this.root, smallestTree);
  }

  public removeBiggestTreeNode(): void {
    const biggestTree = Math.max(...this.breadthFirstSearch());

    this.root = this.removeTreeNode(this.root, biggestTree);
  }

  public removeTreeNode(key: any, element: any): void {
    if (this.isEmpty()) this.root = new SplayNode(key, element);

      // Splay on the key to move the last node on the search path for
      // the key to the root of the tree.
      
      this.splay(key);

      if (this.root.key == key) return;

      let node = new SplayNode(key, element);

      if (key > this.root.key) {
          node.left = this.root;
          node.right = this.root.right;
          this.root.right = null; 
      } else {
          node.right = this.root;
          node.left = this.root.left;
          this.root.left = null;
      }

      this.root = node;
  }

  public breadthFirstSearch() {
    let visited = [];
    let queue = [];
    let current = this.root;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      visited.push(current.element);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return visited;
  }
  
  public summOfTree(): number {
    let arr = this.breadthFirstSearch();

    return arr.reduce((first, second) => first + second, 0);
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
  
  public getRootOfTree(): any {
    return this.root.key;
  }

  public invertTree(root = this.root): any {
    if (root === null) return;

    let temp;

    this.invertTree(root.left);
    this.invertTree(root.right);

    temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
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

export { SplayTree };
