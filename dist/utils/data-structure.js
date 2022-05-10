"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStructure = void 0;
const stack_1 = require("./data-structures/stack");
class DataStructure {
    constructor() { }
    create(type) {
        if (type === 'STACK')
            return new stack_1.Stack();
    }
}
exports.DataStructure = DataStructure;
//# sourceMappingURL=data-structure.js.map