"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
class TreeNode {
    element;
    left;
    right;
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    root;
    size;
    constructor() {
        this.root = null;
        this.size = 0;
    }
    add(element) {
        let newNode = new TreeNode(element);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        this.size++;
        while (current) {
            if (element === current.element)
                return;
            if (element < current.element) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
            this.size++;
        }
    }
    remove(element) {
        this.root = this.removeTreeNode(this.root, element);
    }
    removeTreeNode(current, element) {
        if (current === null)
            return current;
        if (element === current.element) {
            if (current.left === null && current.right === null) {
                return null;
            }
            else if (current.left === null) {
                return current.right;
            }
            else if (current.right === null) {
                return current.left;
            }
            else {
                let tempNode = this.findSmallestTreeNode(current.right);
                current.element = tempNode.element;
                current.right = this.removeTreeNode(current.right, tempNode.element);
                return current;
            }
        }
        else if (element < current.element) {
            current.left = this.removeTreeNode(current.left, element);
            return current;
        }
        else {
            current.right = this.removeTreeNode(current.right, element);
            return current;
        }
    }
    findSmallestTreeNode(element) {
        while (element.left !== null)
            element = element.left;
        return element;
    }
    getRootOfTree() {
        return this.root.element;
    }
    peek() {
        if (!this.root)
            return false;
        let current = this.root;
        while (current) { }
    }
    has(element) {
        if (!this.root)
            return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (element < current.element) {
                current = current.left;
            }
            else if (element > current.element) {
                current = current.right;
            }
            else {
                found = current;
            }
        }
        if (!found)
            return false;
        return true;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    print() {
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
exports.BinaryTree = BinaryTree;
//# sourceMappingURL=tree.js.map