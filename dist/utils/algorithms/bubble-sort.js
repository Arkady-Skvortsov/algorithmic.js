"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
class BubbleSort {
    array;
    constructor(array) {
        this.array = array;
    }
    run() {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length; j++) {
                if (this.array[j + 1] < this.array[j]) {
                    let elem = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = elem;
                }
            }
        }
        return this.array;
    }
}
exports.BubbleSort = BubbleSort;
//# sourceMappingURL=bubble-sort.js.map