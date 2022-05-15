"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadixSort = void 0;
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
            for (let num of arr) {
                this.count++;
                buckets[Math.floor((num % divisor) / (divisor / 10))]?.push(num);
            }
            arr = [].concat.apply([], buckets);
            divisor *= 10;
        }
        return { array: arr, count: this.count };
    }
}
exports.RadixSort = RadixSort;
//# sourceMappingURL=radix-sort.js.map