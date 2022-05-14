"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearSearch = void 0;
const big_o_notation_1 = require("../big-o-notation");
class LinearSearch {
    count;
    constructor() {
        this.count = 0;
    }
    run(array, item) {
        for (let i = 0; i < array.length; i++) {
            this.count += 1;
            if (array[i] === item)
                return { index: i, time: this.count };
        }
        return;
    }
}
exports.LinearSearch = LinearSearch;
const linearSearch = new LinearSearch();
const bigONotation = new big_o_notation_1.BigONotation(linearSearch.run([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 8).time);
console.log(bigONotation.checkComplexity());
//# sourceMappingURL=linear-search.js.map