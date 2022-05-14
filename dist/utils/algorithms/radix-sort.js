"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadixSort = void 0;
const big_o_notation_1 = require("../big-o-notation");
class RadixSort {
    count;
    constructor() {
        this.count = 0;
    }
    run(arr) {
        const maxNum = Math.max(...arr) * 10;
        let divisor = 10;
        while (divisor < maxNum) {
            let buckets = [...Array(10)].map(() => []);
            this.count++;
            for (let num of arr) {
                buckets[Math.floor((num % divisor) / (divisor / 10))]?.push(num);
            }
            arr = [].concat.apply([], buckets);
            divisor *= 10;
        }
        return { array: arr, count: this.count };
    }
}
exports.RadixSort = RadixSort;
const time = new big_o_notation_1.BigONotation();
console.log(time.checkComplexity(new RadixSort().run([-2, -30, -100, 1, 100, 90, 80, 65, 55, 64, 20]).count));
//# sourceMappingURL=radix-sort.js.map