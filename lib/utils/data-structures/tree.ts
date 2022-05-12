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
    let newNode = new TreeNode(element);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    this.size++;

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
        let tempNode = this.findSmallestTreeNode(current.right);
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

  private findSmallestTreeNode(element: any) {
    while (element.left !== null) element = element.left;

    return element;
  }

  public getRootOfTree() {
    return this.root.element;
  }

  public peek() {
    if (!this.root) return false;

    let current = this.root;

    while (current) {}
  }

  public has(element: any) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (element < current.element) {
        current = current.left;
      } else if (element > current.element) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return false;

    return true;
  }

  public getSize() {
    return this.size;
  }

  public isEmpty() {
    return this.size === 0;
  }

  public print() {
    // let curr = this.root;
    // let str = '';

    // while (curr) {
    //   str += curr.element + ' ';
    //   curr = curr.left ?? curr.right;
    // }

    // return str;

    return this.root;
  }
}

export { BinaryTree };
