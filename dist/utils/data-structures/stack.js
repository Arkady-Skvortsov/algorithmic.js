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
    pop() { }
    peek() { }
    isEmpty() { }
}
exports.Stack = Stack;
const stack = new Stack();
//# sourceMappingURL=stack.js.map