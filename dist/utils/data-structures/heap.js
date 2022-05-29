"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
class HeapNode {
    element;
    left;
    right;
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}
class Heap {
    root;
    size;
    constructor() {
        this.root = null;
        this.size = 0;
    }
    add(element) {
        const newNode = new HeapNode(element);
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
            this.size++;
        }
    }
    getRootOfHeap() {
        return this.root.element;
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
    clear() {
        this.root = null;
    }
    turnIn(options) {
        if (options === 'max') {
        }
        return this;
    }
    has(element) {
        return this.find(element) ? true : false;
    }
    getSize() {
        return this.size - 1;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    print() {
        return { ...this.root };
    }
}
exports.Heap = Heap;
const heap = new Heap();
//# sourceMappingURL=heap.js.map