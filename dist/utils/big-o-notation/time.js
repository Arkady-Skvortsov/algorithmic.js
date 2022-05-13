"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    time;
    constructor(fnTime) {
        this.time = fnTime;
    }
    factorial(n) {
        return n === 1 ? 1 : n * this.factorial(n - 1);
    }
    count(type) {
        return type === 'O(n)'
            ? this.time
            : type === 'O(n^2)'
                ? this.time ** 2
                : type === 'O(2^n)'
                    ? 2 ** this.time
                    : type === 'O(n!)'
                        ? this.factorial(this.time)
                        : type === 'O(log n)'
                            ? Math.log(this.time)
                            : type === 'O(n log n)'
                                ? this.time * Math.log(this.time)
                                : null;
    }
}
exports.Time = Time;
//# sourceMappingURL=time.js.map