"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertionSort = void 0;
class InsertionSort {
    constructor() { }
    run(array) {
        for (let i = 1; i < array.length; i++) {
            let currentVal = array[i];
            for (let j = i - 1; j >= 0 && array[j] > currentVal; j--) {
                array[j + 1] = array[j];
                array[j + 1] = currentVal;
            }
        }
        return array;
    }
}
exports.InsertionSort = InsertionSort;
const insertion = new InsertionSort();
//# sourceMappingURL=insertion.js.map