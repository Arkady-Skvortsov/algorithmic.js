"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Nodes {
    element;
    next;
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
    append(element) {
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
        this.size++;
    }
    next() {
        let head = this.head !== null ? this.head : null;
        let node = new Nodes(head);
        console.log(head, node);
    }
    prev() { }
    peek() {
        let index = this.size - 1;
        let curr, prev;
        curr = this.head;
        // add the element to the
        // first index
        curr = this.head;
        // iterate over the list to find
        // the position to insert
        prev = curr;
        curr = curr.next;
        return [index, prev.next, curr.next];
    }
    first() {
        let index = 0;
        let curr, prev;
        curr = this.head;
        prev = curr;
        if (index === 0) {
            this.head = curr.next;
        }
        return curr.element;
    }
    find(element) { }
    insertAfter(element, index) {
        if (index < 0 || index > this.size)
            return 'Please enter a valid index';
        else {
            let node = new Nodes(element);
            let curr, prev;
            curr = this.head;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                curr = this.head;
                let it = 0;
                while (it < index) {
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
    removeByIndex(index) {
        if (index < 0 || index >= this.size)
            return 'Please Enter a valid index';
        let curr, prev, it = 0;
        curr = this.head;
        prev = curr;
        if (index === 0) {
            this.head = curr.next;
        }
        else {
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size--;
        return curr.element;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
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