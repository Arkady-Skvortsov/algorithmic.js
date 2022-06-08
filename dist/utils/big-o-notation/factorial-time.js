"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactorialTime = void 0;
class FactorialTime {
    constructor() { }
    factorial(n) {
        return n === 1 ? 1 : n * this.factorial(n - 1);
    }
    check(time) {
        return this.factorial(time);
    }
}
exports.FactorialTime = FactorialTime;
//# sourceMappingURL=factorial-time.js.map