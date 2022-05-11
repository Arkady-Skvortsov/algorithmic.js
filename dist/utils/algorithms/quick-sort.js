"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = void 0;
class QuickSort {
    array;
    constructor(array) {
        this.array = array;
    }
    run() {
        let privotIndex = Math.floor(this.array.length / 2);
        let privot = this.array[privotIndex];
        let less = [];
        let greater = [];
        if (this.array.length <= 1) {
            return this.array;
        }
        for (let i = 0; i < this.array.length; i++) {
            if (i == privotIndex)
                continue;
            this.array[i] < privot
                ? less.push(this.array[i])
                : greater.push(this.array[i]);
        }
        return [
            ...new QuickSort(less).run(),
            privot,
            ...new QuickSort(greater).run(),
        ];
    }
}
exports.QuickSort = QuickSort;
//# sourceMappingURL=quick-sort.js.map