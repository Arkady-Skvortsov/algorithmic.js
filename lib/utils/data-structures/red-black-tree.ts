import { side, RED, BLACK, RedBlackNode } from '../interfaces/data-structure.enum';

class RedBlackTree {
  private root: any;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  public getRootOfTree(): any {
    return this.root.element;
  }

  public isRed(node: any): boolean {
    return !node ? BLACK : node.color;
  }

  public add(key: any, element: any): void {
    this.root = this.addRoot(this.root, key, element);
    this.root.color = BLACK;
  }

  private addRoot(node: any, key: any, element: any): any {
    if (!node) {
      this.size++;
      return new RedBlackNode(key, element);
    }
    if (key < node.key) {
      node.left = this.addRoot(node.left, key, element);
    } else if (key > node.key) {
      node.right = this.addRoot(node.right, key, element);
    } else {
      node.value = element;
    }
    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.leftRotate(node);
    }
    if (this.isRed(node.left) && this.isRed(node.left.left)) {
      node = this.rightRotate(node);
    }
    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColors(node);
    }
    return node;
  }

  public summOfTree(): number {
    let arr = this.breadthFirstSearch();

    return arr.reduce((first, second) => first + second, 0);
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

  public peek(side: side): any {
    let current = this.root;

    if (side === 'left') {
      while (current.left !== null) {
        current = current.left;

        if (current.left === null) return current.element;
      }
    }

    while (current.right !== null) {
      current = current.right;

      if (current.right === null) return current.element;
    }
  }

  public removeSmallestTreeNode(): void {
    const smallestTree = Math.min(...this.breadthFirstSearch());

    this.root = this.removeTreeNode(this.root, smallestTree);
  }

  public removeBiggestTreeNode(): void {
    const biggestTree = Math.max(...this.breadthFirstSearch());

    this.root = this.removeTreeNode(this.root, biggestTree);
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

  public leftRotate(node: any): any {
    node = this.find(node);

    let tmp = node.right;

    node.right = tmp.left;
    tmp.left = node;
    tmp.color = node.color;
    node.color = RED;

    return tmp;
  }

  public rightRotate(node: any): any {
    node = this.find(node);
 
    let tmp = node.left;

    node.left = tmp.right;
    tmp.right = node;
    tmp.color = node.color;
    node.color = RED;

    return tmp;
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

  public flipColors(node: any): void {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
  }

  public has(key: any): boolean {
    return this.find(key) ? true : false;
  }

  private findMaxHeight(root = this.root): number {
    if (root === null) return -1;

    let left = this.findMaxHeight(root.left);
    let right = this.findMaxHeight(root.right);

    return left > right ? left + 1 : right + 1;
  }

  private findMinHeight(root = this.root): number {
    if (root === null) return -1;

    let left = this.findMinHeight(root.left);
    let right = this.findMinHeight(root.right);

    return left < right ? left + 1 : right + 1;
  }

  public findMinNode(): any {
    let root = this.root;

    while (root.left !== null) {
      root = root.left;
    }

    return root.element;
  }

  public findMaxNode(): any {
    let root = this.root;

    while (root.right !== null) {
      root = root.right;
    }

    return root.element;
  }

  public isBalanced(): boolean {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  public setRootToElement(element: any): void {
    let root = this.find(element);

    this.root = root;
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

  public clear(): void {
    this.root = null;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public getSize(): number {
    return this.size;
  }

  public print(): Object {
    return { ...this.root };
  }
}

export { RedBlackTree };
