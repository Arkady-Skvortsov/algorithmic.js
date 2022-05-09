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
    getSize() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
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
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('O privet', 1);
priorityQueue.enqueue('O poka', 2);
priorityQueue.enqueue('Chto?', 2);
priorityQueue.enqueue('Menya zovut Valera, mne 54 goda', 3);
priorityQueue.enqueue([1, 3, false, undefined], 8);
priorityQueue.enqueue(122, 7);
priorityQueue.enqueue('N', 6);
priorityQueue.enqueue('Arkasha', 6);
console.log(priorityQueue.getSize());
console.log(priorityQueue.first());
console.log(priorityQueue.peek());
console.log(priorityQueue.print());
//# sourceMappingURL=priority-queue.js.map