"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleSort = void 0;
class CycleSort {
    constructor() { }
    run(array) {
        for (let currentIndex = 0; currentIndex < array.length - 1; currentIndex++) {
            let item = array[currentIndex];
            let currentIndexCopy = currentIndex;
            for (let i = currentIndex + 1; i < array.length; i++)
                if (array[i] < item)
                    currentIndexCopy++;
            if (currentIndexCopy == currentIndex)
                continue;
            while (item == array[currentIndexCopy])
                currentIndexCopy++;
            let temp = array[currentIndexCopy];
            array[currentIndexCopy] = item;
            item = temp;
            while (currentIndexCopy != currentIndex) {
                currentIndexCopy = currentIndex;
                for (let i = currentIndex + 1; i < array.length; i++)
                    if (array[i] < item)
                        currentIndexCopy++;
                while (item == array[currentIndexCopy])
                    currentIndexCopy++;
                temp = array[currentIndexCopy];
                array[currentIndexCopy] = item;
                item = temp;
            }
        }
        return array;
    }
}
exports.CycleSort = CycleSort;
//# sourceMappingURL=cycle-sort.js.map