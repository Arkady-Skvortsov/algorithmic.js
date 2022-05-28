"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleLinkedList = void 0;
class Nodes {
    element;
    next;
    prev;
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList {
    head;
    tail;
    size;
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.size = 0;
    }
    add(element) {
        let newNode = new Nodes(element);
        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.head = this.tail = newNode;
        this.size++;
    }
    remove(element) {
        let current = this.head;
        let prev = null;
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                }
                else {
                    prev.next = current.next;
                }
                this.size--;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    find(element) {
        let head = this.head;
        while (head.element !== element) {
            head = head.next;
            if (head.element === element) {
                return element;
            }
        }
        if (head.element === element) {
            return element;
        }
    }
    first() {
        return this.head.element;
    }
    peek() {
        return this.tail.element;
    }
    clear() {
        this.head = null;
    }
    has(element) {
        return this.find(element) ? true : false;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    next() {
        let curr = this.head;
        if (curr.next !== null) {
            curr = curr.next;
            this.head = curr;
        }
        return this;
    }
    prev() {
        let curr = this.head;
        if (curr.prev !== null) {
            curr = curr.prev;
            this.head = curr;
        }
        return this;
    }
    print() {
        let array = [];
        let currentList = this.head;
        while (currentList !== null) {
            array.push(currentList.element);
            currentList = currentList.next;
        }
        return array.join(' ');
    }
}
exports.DoubleLinkedList = DoubleLinkedList;
//# sourceMappingURL=double-linked-list.js.map