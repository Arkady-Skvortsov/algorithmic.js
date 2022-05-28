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
    remove(element) { }
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
heap.add(100);
heap.add(120);
heap.add(300);
heap.add(1200);
heap.add(4000);
heap.add(2000);
heap.add(1000);
heap.add(53);
console.log(heap.getSize());
//# sourceMappingURL=heap.js.map