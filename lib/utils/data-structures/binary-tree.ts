class TreeNode {
  public element: any;
  public left: null;
  public right: null;

  constructor(element: any) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  private root: null | any;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  public add(element: any): any {
    const newNode = new TreeNode(element);

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
    }
    this.size++;
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

  public removeSmallestTreeNode(): void {
    const smallestTree = Math.min(...this.breadthFirstSearch());

    this.root = this.removeTreeNode(this.root, smallestTree);
  }

  public removeBiggestTreeNode(): void {
    const biggestTree = Math.max(...this.breadthFirstSearch());

    this.root = this.removeTreeNode(this.root, biggestTree);
  }

  public getRootOfTree(): any {
    return this.root.element;
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

  public clear(): void {
    this.root = null;
  }

  public has(element: any): boolean {
    return this.find(element) ? true : false;
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

  public summOfTree(): number {
    let arr = this.breadthFirstSearch();

    return arr.reduce((first, second) => first + second, 0);
  }

  public breadthFirstSearch(): any[] {
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

  public getSize(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public print() {
    return { ...this.root };
  }
}

export { BinaryTree };
