"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    stack;
    constructor() {
        this.stack = [];
    }
    push(arg) {
        this.stack.push(arg);
    }
    pop() {
        this.stack.pop();
    }
    first() {
        return this.stack[0];
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    getSize() {
        return this.stack.length;
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    print() {
        return this.stack.join(' ');
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map