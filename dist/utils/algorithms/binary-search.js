"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearch = void 0;
class BinarySearch {
    count;
    constructor() {
        this.count = 0;
    }
    run(array, item) {
        let start = 0;
        let end = array.length;
        let middle;
        let found = false;
        let position = -1;
        while (found === false && start <= end) {
            this.count += 1;
            middle = Math.floor((start + end) / 2);
            array[middle] === item
                ? ((found = true), (position = middle), position)
                : item < array[middle]
                    ? (end = middle - 1)
                    : (start = middle + 1);
        }
        return { array: position, count: this.count };
    }
}
exports.BinarySearch = BinarySearch;
//# sourceMappingURL=binary-search.js.map