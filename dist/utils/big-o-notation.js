"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigONotation = void 0;
const double_logarithmic_time_1 = require("./big-o-notation/double-logarithmic-time");
const exponential_time_1 = require("./big-o-notation/exponential-time");
const factorial_time_1 = require("./big-o-notation/factorial-time");
const linear_time_1 = require("./big-o-notation/linear-time");
const linearithmic_time_1 = require("./big-o-notation/linearithmic-time");
const logarithmic_time_1 = require("./big-o-notation/logarithmic-time");
const quadratic_time_1 = require("./big-o-notation/quadratic-time");
class BigONotation {
    constructor() { }
    linearTime() {
        return new linear_time_1.LinearTime();
    }
    doubleLogarithmicTime() {
        return new double_logarithmic_time_1.DoubleLogarithmicTime();
    }
    exponentialTime() {
        return new exponential_time_1.ExponentialTime();
    }
    factorialTime() {
        return new factorial_time_1.FactorialTime();
    }
    linearithmicTime() {
        return new linearithmic_time_1.LinearithmicTime();
    }
    logarithmicTime() {
        return new logarithmic_time_1.LogarithmicTime();
    }
    quadraticTime() {
        return new quadratic_time_1.QuadraticTime();
    }
    checkComplexity(time) {
        const complexityTable = `
    |              O(n)             |               O(n^2)            |             O(log n)              |             O(n log n)             |           O(2^n)                         |              O(n!)                               
    |  ${this.linearTime().check(time)} 
    |  ${this.quadraticTime().check(time)}  | ${this.logarithmicTime().check(time)}      | ${this.linearithmicTime().check(time)} |   ${this.exponentialTime().check(time)}      |  ${this.factorialTime().check(time)}
    `;
        return complexityTable;
    }
}
exports.BigONotation = BigONotation;
//# sourceMappingURL=big-o-notation.js.map