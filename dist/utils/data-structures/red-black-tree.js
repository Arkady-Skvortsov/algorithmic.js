"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedBlackTree = void 0;
const RED = true;
const BLACK = false;
class Nodes {
    key;
    element;
    left;
    right;
    color;
    constructor(key, element) {
        this.key = key;
        this.element = element;
        this.left = null;
        this.right = null;
        this.color = BLACK;
    }
}
class RedBlackTree {
    root;
    size;
    constructor() {
        this.root = null;
        this.size = 0;
    }
    getRootOfTree() {
        return this.root.element;
    }
    isRed(node) {
        return !node ? BLACK : node.color;
    }
    add(key, element) {
        this.root = this.addRoot(this.root, key, element);
        this.root.color = BLACK;
    }
    addRoot(node, key, element) {
        if (!node) {
            this.size++;
            return new Nodes(key, element);
        }
        if (key < node.key) {
            node.left = this.addRoot(node.left, key, element);
        }
        else if (key > node.key) {
            node.right = this.addRoot(node.right, key, element);
        }
        else {
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
    summOfTree() {
        let arr = this.breadthFirstSearch();
        return arr.reduce((first, second) => first + second, 0);
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
    removeSmallestTreeNode() {
        const smallestTree = Math.min(...this.breadthFirstSearch());
        this.root = this.removeTreeNode(this.root, smallestTree);
    }
    removeBiggestTreeNode() {
        const biggestTree = Math.max(...this.breadthFirstSearch());
        this.root = this.removeTreeNode(this.root, biggestTree);
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
    leftRotate(node) {
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        tmp.color = node.color;
        node.color = RED;
        return tmp;
    }
    rightRotate(node) {
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        tmp.color = node.color;
        node.color = RED;
        return tmp;
    }
    flipColors(node) {
        node.color = RED;
        node.left.color = BLACK;
        node.right.color = BLACK;
    }
    has(key) {
        return this.find(key) ? true : false;
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
    clear() {
        this.root = null;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    getSize() {
        return this.size;
    }
    print() {
        return { ...this.root };
    }
}
exports.RedBlackTree = RedBlackTree;
const rbt = new RedBlackTree();
rbt.add('A', 12);
rbt.add('B', 100);
rbt.add('C', 123);
rbt.add('H', 111);
rbt.remove('J');
console.log(rbt.print());
//# sourceMappingURL=red-black-tree.js.map