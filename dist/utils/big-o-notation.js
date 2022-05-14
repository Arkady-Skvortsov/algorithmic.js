"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigONotation = void 0;
class BigONotation {
    constructor() { }
    factorial(n) {
        return n === 1 ? 1 : n * this.factorial(n - 1);
    }
    check(time, type) {
        return type === 'LINEAR-TIME'
            ? time
            : type === 'QUADRATIC-TIME'
                ? time ** 2
                : type === 'EXPONENTIAL-TIME'
                    ? 2 ** time
                    : type === 'FACTORIAL-TIME'
                        ? this.factorial(time)
                        : type === 'LOGARITHMIC-TIME'
                            ? Math.log(time)
                            : type === 'LINEARITHMIC-TIME'
                                ? time * Math.log(time)
                                : type === 'DOUBLE-LOGARITHMIC-TIME'
                                    ? Math.log(Math.log(time))
                                    : 'What?';
    }
    checkComplexity(time) {
        const complexityTable = `
    |              O(n)             |               O(n^2)            |             O(log n)              |             O(n log n)             |           O(2^n)                         |              O(n!)                               
    |  ${this.check(time, 'LINEAR-TIME')} 
    |  ${this.check(time, 'QUADRATIC-TIME')}  | ${this.check(time, 'LOGARITHMIC-TIME')}      | ${this.check(time, 'LINEARITHMIC-TIME')} |   ${this.check(time, 'EXPONENTIAL-TIME')}      |  ${this.check(time, 'FACTORIAL-TIME')}
    `;
        return complexityTable;
    }
}
exports.BigONotation = BigONotation;
//# sourceMappingURL=big-o-notation.js.map