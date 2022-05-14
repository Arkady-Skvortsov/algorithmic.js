"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatienceSort = void 0;
const big_o_notation_1 = require("../big-o-notation");
class PatienceSort {
    count;
    constructor() {
        this.count = 0;
    }
    run(arr) {
        let piles = [];
        let sorted_sequence = [];
        for (let i = 0; i < arr.length; i++) {
            if (piles.length == 0) {
                let temp = [];
                temp.push(arr[i]);
                piles.push(temp);
            }
            else {
                let flag = 1;
                for (let j = 0; j < piles.length; j++) {
                    if (arr[i] < piles[j][piles[j].length - 1]) {
                        piles[j].push(arr[i]);
                        flag = 0;
                        break;
                    }
                }
                if (flag) {
                    let temp = [];
                    temp.push(arr[i]);
                    piles.push(temp);
                }
            }
        }
        sorted_sequence = this.merge_piles(piles);
        return { array: sorted_sequence, count: this.count };
    }
    merge_piles(v) {
        let array = [];
        while (1) {
            let minu = Number.MAX_SAFE_INTEGER;
            let index = -1;
            for (let i = 0; i < v.length; i++) {
                if (minu > v[i][v[i].length - 1]) {
                    minu = v[i][v[i].length - 1];
                    index = i;
                }
            }
            array.push(minu);
            v[index].pop();
            if (v[index].length == 0) {
                v.splice(index, 1);
            }
            if (v.length == 0)
                break;
        }
        return array;
    }
}
exports.PatienceSort = PatienceSort;
const time = new big_o_notation_1.BigONotation();
console.log(time.checkComplexity(new PatienceSort().run([-2, -30, -100, 1, 100, 90, 80, 65, 55, 64, 20])
    .count));
//# sourceMappingURL=patience-sort.js.map