"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellSort = void 0;
class ShellSort {
    constructor() { }
    run(arr) {
        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i += 1) {
                let temp = arr[i];
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
        return arr;
    }
}
exports.ShellSort = ShellSort;
//# sourceMappingURL=shell-sort.js.map