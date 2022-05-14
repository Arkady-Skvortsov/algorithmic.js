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
    add(element, type) { }
    remove(element, type) { }
    find() { }
    clear() { }
    turnIn(type) { }
    getSize() { }
    isEmpty() { }
    print() { }
}
exports.Heap = Heap;
const heap = new Heap();
//# sourceMappingURL=heap.js.map