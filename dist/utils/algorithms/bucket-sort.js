"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketSort = void 0;
class BucketSort {
    constructor() { }
    run(arr) {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        const buckets = Array.from({ length: Math.floor((max - min) / arr.length) + 1 }, () => []);
        arr.forEach((val) => {
            buckets[Math.floor((val - min) / arr.length)].push(val);
        });
        return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
    }
}
exports.BucketSort = BucketSort;
//# sourceMappingURL=bucket-sort.js.map