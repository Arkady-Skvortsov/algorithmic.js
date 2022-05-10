"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearSearch = void 0;
class LinearSearch {
    array;
    constructor(array) {
        this.array = array;
    }
    run(item) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === item)
                return i;
        }
        return "You don't have that item in you'r array";
    }
}
exports.LinearSearch = LinearSearch;
//# sourceMappingURL=linear-search.js.map