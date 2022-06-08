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
            return;
        }
        if (this.root.key == key) {
            return;
        }
        var node = new data_structure_enum_1.SplayNode(key, element);
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
    zig() { }
    zigZig() { }
    zigZag() { }
    clear() {
        this.root = null;
    }
    has(element) {
        return this.find(element) ? true : false;
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
    findBiggestTreeNode() { }
    findSmallestTreeNode() { }
    removeSmallestTreeNode() { }
    removeBiggestTreeNode() { }
    breadthFirstSearch() { }
    summOfTree() {
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
        return this.root.element;
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
const splayTree = new SplayTree();
splayTree.add("one", 100);
splayTree.add("two", 400);
splayTree.add("three", 320);
splayTree.add("fourth", 20);
splayTree.add("wefw", 10);
splayTree.add("wefer232r23", 10000);
console.log(splayTree.print());
//# sourceMappingURL=splay-tree.js.map