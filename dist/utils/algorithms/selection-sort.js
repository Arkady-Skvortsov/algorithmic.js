"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionSort = void 0;
class SelectionSort {
    count;
    constructor() {
        this.count = 0;
    }
    run(array) {
        for (let i = 0; i < array.length; i++) {
            let indexMin = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[indexMin]) {
                    indexMin = j;
                }
                this.count += 1;
            }
            let element = array[i];
            array[i] = array[indexMin];
            array[indexMin] = element;
        }
        return { array, count: this.count };
    }
}
exports.SelectionSort = SelectionSort;
//# sourceMappingURL=selection-sort.js.map