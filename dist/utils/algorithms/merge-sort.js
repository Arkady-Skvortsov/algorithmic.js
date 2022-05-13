"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = void 0;
class MergeSort {
    constructor() { }
    run(array) {
        const half = array.length / 2;
        if (array.length < 2) {
            return array;
        }
        const left = array.splice(0, half);
        return this.merge(this.run(left), this.run(array));
    }
    merge(first, second) {
        const sortedArray = [];
        while (first.length && second.length) {
            first[0] < second[0]
                ? sortedArray.push(first.shift())
                : sortedArray.push(second.shift());
        }
        return [...sortedArray, ...first, ...second];
    }
}
exports.MergeSort = MergeSort;
//# sourceMappingURL=merge-sort.js.map