"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = void 0;
class QuickSort {
    count;
    constructor() {
        this.count = 0;
    }
    run(array) {
        let privotIndex = Math.floor(array.length / 2);
        let privot = array[privotIndex];
        let less = [];
        let greater = [];
        if (array.length <= 1) {
            return array;
        }
        for (let i = 0; i < array.length; i++) {
            this.count += 1;
            if (i == privotIndex)
                continue;
            array[i] < privot ? less.push(array[i]) : greater.push(array[i]);
        }
        return {
            array: [...this.run(less), privot, ...this.run(greater)],
            count: this.count,
        };
    }
}
exports.QuickSort = QuickSort;
//# sourceMappingURL=quick-sort.js.map