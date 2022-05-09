"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStructure = void 0;
const stack_1 = require("./data-structures/stack");
const queue_1 = require("./data-structures/queue");
const linked_list_1 = require("./data-structures/linked-list");
class DataStructure {
    constructor() { }
    create(type) {
        if (type === 'STACK')
            return new stack_1.Stack();
        if (type === 'QUEUE')
            return new queue_1.Queue();
        if (type === 'LINKED-LIST')
            return new linked_list_1.LinkedList();
    }
}
exports.DataStructure = DataStructure;
//# sourceMappingURL=data-structure.js.map