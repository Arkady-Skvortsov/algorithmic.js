"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeapSort = void 0;
class HeapSort {
    constructor() { }
    heapify(array, size, i) {
        let max = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left < size && array[left] > array[max])
            max = left;
        if (right < size && array[right] > array[max])
            max = right;
        if (max != i) {
            let temp = array[i];
            array[i] = array[max];
            array[max] = temp;
            this.heapify(array, size, max);
        }
    }
    run(array) {
        let size = array.length;
        for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
            this.heapify(array, size, i);
        for (let i = size - 1; i >= 0; i--) {
            let temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            this.heapify(array, i, 0);
        }
        return array;
    }
}
exports.HeapSort = HeapSort;
//# sourceMappingURL=heap-sort.js.map