"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountingSort = void 0;
class CountingSort {
    count;
    constructor() {
        this.count = 0;
    }
    run(arr) {
        let j = 0;
        let supplementary = [];
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        for (let i = min; i <= max; i++) {
            supplementary[i] = 0;
        }
        for (let i = 0; i < arr.length; i++) {
            supplementary[arr[i]] += 1;
        }
        for (let i = min; i <= max; i++) {
            this.count += 1;
            while (supplementary[i] > 0) {
                arr[j++] = i;
                supplementary[i] -= 1;
            }
        }
        return { array: arr, count: this.count };
    }
}
exports.CountingSort = CountingSort;
//# sourceMappingURL=counting-sort.js.map