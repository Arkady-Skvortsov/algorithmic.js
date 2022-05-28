"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStructure = void 0;
const stack_1 = require("./data-structures/stack");
const queue_1 = require("./data-structures/queue");
class DataStructure {
    create(type) {
        if (type === 'STACK') {
            return new stack_1.Stack();
        }
        else {
            return new queue_1.Queue();
        }
    }
}
exports.DataStructure = DataStructure;
//# sourceMappingURL=data-structure.js.map