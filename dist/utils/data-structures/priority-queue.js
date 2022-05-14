"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
class QElement {
    element;
    priority;
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}
class PriorityQueue {
    items;
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        let qElement = new QElement(element, priority);
        let contain = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }
    first() {
        return { ...this.items[0] };
    }
    peek() {
        return { ...this.items[this.items.length - 1] };
    }
    dequeue() {
        this.items.shift();
    }
    clear() {
        this.items.length = 0;
    }
    has(element) {
        return this.items.find((item) => item === element) ? true : false;
    }
    getSize() {
        return this.items.length;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    print() {
        let str = '';
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i].element + ' ';
        }
        return str;
    }
}
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=priority-queue.js.map