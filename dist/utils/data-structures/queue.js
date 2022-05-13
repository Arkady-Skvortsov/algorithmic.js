"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    queue;
    constructor() {
        this.queue = [];
    }
    enqueue(elem) {
        this.queue.push(elem);
    }
    dequeue() {
        this.queue.shift();
    }
    first() {
        return this.queue[0];
    }
    has(elem) {
        return this.queue.find((q) => q === elem) ? true : false;
    }
    peek() {
        return this.queue[this.queue.length - 1];
    }
    getSize() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    print() {
        return this.queue.join(' ');
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map