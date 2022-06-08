"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedBlackTree = void 0;
const data_structure_enum_1 = require("../interfaces/data-structure.enum");
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
        return !this.find(node) ? data_structure_enum_1.BLACK : data_structure_enum_1.RED;
    }
    add(key, element) {
        this.root = this.addRoot(this.root, key, element);
        this.root.color = data_structure_enum_1.BLACK;
    }
    addRoot(node, key, element) {
        if (!node) {
            this.size++;
            return new data_structure_enum_1.RedBlackNode(key, element);
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
        this.size--;
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
    findSmallestTrNode() {
        return Math.min(...this.breadthFirstSearch());
    }
    peek(side) {
        let current = this.root;
        if (side === 'left') {
            while (current.left !== null) {
                current = current.left;
                if (current.left === null)
                    return { ...current };
            }
        }
        while (current.right !== null) {
            current = current.right;
            if (current.right === null)
                return { ...current };
        }
    }
    findBiggestTreeNode() {
        return Math.max(...this.breadthFirstSearch());
    }
    removeSmallestTreeNode() {
        const smallestTree = Math.min(...this.breadthFirstSearch());
        this.root = this.removeTreeNode(this.root, smallestTree);
        this.size--;
    }
    removeBiggestTreeNode() {
        const biggestTree = Math.max(...this.breadthFirstSearch());
        this.root = this.removeTreeNode(this.root, biggestTree);
        this.size--;
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
        node = this.find(node);
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        tmp.color = node.color;
        node.color = data_structure_enum_1.RED;
        return tmp;
    }
    rightRotate(node) {
        node = this.find(node);
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        tmp.color = node.color;
        node.color = data_structure_enum_1.RED;
        return tmp;
    }
    invertTree(root = this.root) {
        if (root === null)
            return;
        let temp;
        this.invertTree(root.left);
        this.invertTree(root.right);
        temp = root.left;
        root.right = temp;
        root.left = root.right;
        root.color = temp.color;
        temp.color = data_structure_enum_1.RED;
        return root;
    }
    flipColors(node) {
        node.color = data_structure_enum_1.RED;
        node.left.color = data_structure_enum_1.BLACK;
        node.right.color = data_structure_enum_1.BLACK;
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
            if (node.left !== null)
                traverse(node.left);
            visited.push(node.element);
            if (node.right !== null)
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
//# sourceMappingURL=red-black-tree.js.map