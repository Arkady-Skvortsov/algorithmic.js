"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
class BubbleSort {
    count;
    constructor() {
        this.count = 0;
    }
    run(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j + 1] < array[j]) {
                    let elem = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = elem;
                }
                this.count += 1;
            }
        }
        return { array: array, count: this.count };
    }
}
exports.BubbleSort = BubbleSort;
//# sourceMappingURL=bubble-sort.js.map