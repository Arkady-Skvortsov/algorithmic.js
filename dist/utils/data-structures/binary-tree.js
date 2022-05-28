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
        const newNode = new TreeNode(element);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
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
        }
        this.size++;
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
                const tempNode = this.findSmallestTreeNode(current.right);
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
    removeSmallestTreeNode() {
        const smallestTree = Math.min(...this.breadthFirstSearch());
        this.root = this.removeTreeNode(this.root, smallestTree);
    }
    removeBiggestTreeNode() {
        const biggestTree = Math.max(...this.breadthFirstSearch());
        this.root = this.removeTreeNode(this.root, biggestTree);
    }
    getRootOfTree() {
        return this.root.element;
    }
    find(element) {
        if (this.root === null)
            return false;
        let current = this.root;
        while (current.element !== element) {
            if (element < current.element) {
                current = current.left;
            }
            else {
                current = current.right;
            }
            if (current === null)
                return null;
        }
        return { ...current };
    }
    findMaxHeight(root = this.root) {
        if (root === null)
            return -1;
        let left = this.findMaxHeight(root.left);
        let right = this.findMaxHeight(root.right);
        return left > right ? left + 1 : right + 1;
    }
    findMinHeight(root = this.root) {
        if (root === null)
            return -1;
        let left = this.findMinHeight(root.left);
        let right = this.findMinHeight(root.right);
        return left < right ? left + 1 : right + 1;
    }
    findMinNode() {
        let root = this.root;
        while (root.left !== null) {
            root = root.left;
        }
        return root.element;
    }
    findMaxNode() {
        let root = this.root;
        while (root.right !== null) {
            root = root.right;
        }
        return root.element;
    }
    isBalanced() {
        return this.findMinHeight() >= this.findMaxHeight() - 1;
    }
    setRootToElement(element) {
        let root = this.find(element);
        this.root = root;
    }
    clear() {
        this.root = null;
    }
    peek(side) {
        let current = this.root;
        if (side === 'left') {
            while (current.left !== null) {
                current = current.left;
                if (current.left === null)
                    return current.element;
            }
        }
        while (current.right !== null) {
            current = current.right;
            if (current.right === null)
                return current.element;
        }
    }
    next(side) {
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
    has(element) {
        return this.find(element) ? true : false;
    }
    invertTree(root = this.root) {
        if (root === null)
            return;
        let temp;
        this.invertTree(root.left);
        this.invertTree(root.right);
        temp = root.left;
        root.left = root.right;
        root.right = temp;
        return root;
    }
    summOfTree() {
        let arr = this.breadthFirstSearch();
        return arr.reduce((first, second) => first + second, 0);
    }
    breadthFirstSearch() {
        let visited = [];
        let queue = [];
        let current = this.root;
        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            visited.push(current.element);
            if (current.left)
                queue.push(current.left);
            if (current.right)
                queue.push(current.right);
        }
        return visited;
    }
    preOrder() {
        let visited = [];
        let current = this.root;
        let traverse = (node) => {
            visited.push(node.element);
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
        };
        traverse(current);
        return visited;
    }
    postOrder() {
        let visited = [];
        let current = this.root;
        let traverse = (node) => {
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
            visited.push(node.element);
        };
        traverse(current);
        return visited;
    }
    inOrder() {
        let visited = [];
        let current = this.root;
        let traverse = (node) => {
            if (node.left)
                traverse(node.left);
            visited.push(node.element);
            if (node.right)
                traverse(node.right);
        };
        traverse(current);
        return visited;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    print() {
        return { ...this.root };
    }
}
exports.BinaryTree = BinaryTree;
//# sourceMappingURL=binary-tree.js.map