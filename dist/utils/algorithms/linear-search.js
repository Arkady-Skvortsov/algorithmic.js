"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearSearch = void 0;
class LinearSearch {
    count;
    constructor() {
        this.count = 0;
    }
    run(array, item) {
        for (let i = 0; i < array.length; i++) {
            this.count += 1;
            if (array[i] === item)
                return { index: i, time: this.count };
        }
        return;
    }
}
exports.LinearSearch = LinearSearch;
//# sourceMappingURL=linear-search.js.map