"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigONotation = void 0;
class BigONotation {
    time;
    constructor(fnTime) {
        this.time = fnTime;
    }
    factorial(n) {
        return n === 1 ? 1 : n * this.factorial(n - 1);
    }
    check(type) {
        return type === 'LINEAR-TIME'
            ? this.time
            : type === 'QUADRATIC-TIME'
                ? this.time ** 2
                : type === 'EXPONENTIAL-TIME'
                    ? 2 ** this.time
                    : type === 'FACTORIAL-TIME'
                        ? this.factorial(this.time)
                        : type === 'LOGARITHMIC-TIME'
                            ? Math.log(this.time)
                            : type === 'LINEARITHMIC-TIME'
                                ? this.time * Math.log(this.time)
                                : type === 'DOUBLE-LOGARITHMIC-TIME'
                                    ? Math.log(Math.log(this.time))
                                    : 'What?';
    }
    checkComplexity() {
        const complexityTable = `
    |              O(n)             |               O(n^2)            |             O(log n)              |             O(n log n)             |           O(2^n)                         |              O(n!)                               
    | ${this.check('LINEAR-TIME')}  | ${this.check('QUADRATIC-TIME')} | ${this.check('LOGARITHMIC-TIME')} | ${this.check('LINEARITHMIC-TIME')} |   ${this.check('EXPONENTIAL-TIME')}      |  ${this.check('FACTORIAL-TIME')}
    `;
        return complexityTable;
    }
}
exports.BigONotation = BigONotation;
//# sourceMappingURL=big-o-notation.js.map