"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Nodes {
    element;
    next;
    prev;
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    head;
    size;
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let node = new Nodes(element);
        let current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    peek() {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
            if (curr === null)
                return curr.element;
        }
        if (curr === null)
            return curr.element;
    }
    has(element) {
        let curr = this.head;
        if (curr.element !== element) {
            curr = curr.next;
            if (curr.next.element === element) {
                return true;
            }
            return false;
        }
        else {
            return true;
        }
    }
    first() {
        let idx = 0;
        let curr = this.head;
        if (idx === 0) {
            this.head = curr.next;
        }
        return curr.element;
    }
    find(element) {
        let head = this.head;
        while (head.element !== element) {
            head = head.next;
            if (head.element === element) {
                return element;
            }
            return -1;
        }
        if (head.element === element) {
            return element;
        }
    }
    insertAfter(element, idx) {
        if (idx < 0 || idx > this.size)
            return 'Please enter a valid index';
        else {
            let node = new Nodes(element);
            let curr, prev;
            curr = this.head;
            if (idx == 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                curr = this.head;
                let it = 0;
                while (it < idx) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
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
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    print() {
        let curr = this.head;
        let str = '';
        while (curr) {
            str += curr.element + ' ';
            curr = curr.next;
        }
        return str;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=linked-list.js.map