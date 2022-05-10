"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionSort = void 0;
class SelectionSort {
    array;
    constructor(array) {
        this.array = array;
    }
    run() {
        for (let i = 0; i < this.array.length; i++) {
            let indexMin = i;
            for (let j = i + 1; j < this.array.length; j++) {
                if (this.array[j] < this.array[indexMin]) {
                    indexMin = j;
                }
            }
            let element = this.array[i];
            this.array[i] = this.array[indexMin];
            this.array[indexMin] = element;
        }
        return this.array;
    }
}
exports.SelectionSort = SelectionSort;
const selectionSort = new SelectionSort([
    1, -1, 2, -2, 3, -3, 4, -4, 50, -12, 80, 14, 15, 8, 20,
]).run();
console.log(selectionSort);
//# sourceMappingURL=selection-sort.js.map