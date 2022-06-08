"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplayTree = void 0;
const data_structure_enum_1 = require("../interfaces/data-structure.enum");
class SplayTree {
    root;
    size;
    constructor() {
        this.root = null;
        this.size = 0;
    }
    add(key, element) {
        if (this.isEmpty()) {
            this.root = new data_structure_enum_1.SplayNode(key, element);
        }
        // Splay on the key to move the last node on the search path for
        // the key to the root of the tree.
        this.splay(key);
        if (this.root.key == key)
            return;
        let node = new data_structure_enum_1.SplayNode(key, element);
        if (key > this.root.key) {
            node.left = this.root;
            node.right = this.root.right;
            this.root.right = null;
        }
        else {
            node.right = this.root;
            node.left = this.root.left;
            this.root.left = null;
        }
        this.root = node;
    }
    splay(key) {
        if (this.isEmpty()) {
            return;
        }
        var dummy, left, right;
        dummy = left = right = new data_structure_enum_1.SplayNode(null, null);
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
            }
            else if (key > current.key) {
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
            }
            else {
                break;
            }
        }
        left.right = current.left;
        right.left = current.right;
        current.left = dummy.right;
        current.right = dummy.left;
        this.root = current;
    }
    zig(root = this.root) {
    }
    zigZig(root = this.root) { }
    zigZag(root = this.root) { }
    clear() {
        this.root = null;
    }
    rightRotate(node) {
        node = this.find(node);
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }
    leftRotate(node) {
        node = this.find(node);
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }
    has(element) {
        return this.find(element) ? true : false;
    }
    find(key) {
        if (this.root === null)
            return false;
        let current = this.root;
        while (current.key !== key) {
            if (key < current.key) {
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
    findBiggestTreeNode() {
        return Math.max(...this.breadthFirstSearch());
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
    findSmallestTreeNode() {
        return Math.min(...this.breadthFirstSearch());
    }
    removeSmallestTreeNode() {
        const smallestTree = Math.min(...this.breadthFirstSearch());
        this.root = this.removeTreeNode(this.root, smallestTree);
    }
    removeBiggestTreeNode() {
        const biggestTree = Math.max(...this.breadthFirstSearch());
        this.root = this.removeTreeNode(this.root, biggestTree);
    }
    removeTreeNode(key, element) {
        if (this.isEmpty())
            this.root = new data_structure_enum_1.SplayNode(key, element);
        // Splay on the key to move the last node on the search path for
        // the key to the root of the tree.
        this.splay(key);
        if (this.root.key == key)
            return;
        let node = new data_structure_enum_1.SplayNode(key, element);
        if (key > this.root.key) {
            node.left = this.root;
            node.right = this.root.right;
            this.root.right = null;
        }
        else {
            node.right = this.root;
            node.left = this.root.left;
            this.root.left = null;
        }
        this.root = node;
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
    summOfTree() {
        let arr = this.breadthFirstSearch();
        return arr.reduce((first, second) => first + second, 0);
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
    getRootOfTree() {
        return this.root.key;
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
    peek() { }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    print() {
        return { ...this.root };
    }
}
exports.SplayTree = SplayTree;
//# sourceMappingURL=splay-tree.js.map