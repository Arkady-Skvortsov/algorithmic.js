"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fibonacci = void 0;
class Fibonacci {
    constructor() { }
    run(num) {
        return num <= 1 ? num : this.run(num - 1) + this.run(num - 2);
    }
}
exports.Fibonacci = Fibonacci;
//# sourceMappingURL=fibonacci.js.map