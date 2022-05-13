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

  public add(element: any) {
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

  public remove(element: any) {
    this.root = this.removeTreeNode(this.root, element);
  }

  private removeTreeNode(current: any, element: any) {
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

  private findMaxHeight(root = this.root): any {
    if (root === null) return -1;

    let left = this.findMaxHeight(root.left);
    let right = this.findMaxHeight(root.right);

    return left > right ? left + 1 : right + 1;
  }

  private findMinHeight(root = this.root): any {
    if (root === null) return -1;

    let left = this.findMinHeight(root.left);
    let right = this.findMinHeight(root.right);

    return left < right ? left + 1 : right + 1;
  }

  public findMinNode() {
    let root = this.root;

    while (root.left !== null) {
      root = root.left;
    }

    return root.element;
  }

  public findMaxNode() {
    let root = this.root;

    while (root.right !== null) {
      root = root.right;
    }

    return root.element;
  }

  public isBalanced(): boolean {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  public setRootToElement(element: any) {
    let root = this.find(element);

    this.root = root;
  }

  public releaseTheRoot() {
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

  public recursiveTraversal() {
    let root = this.root;

    return Object.keys(root).forEach((rt) => rt);
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
