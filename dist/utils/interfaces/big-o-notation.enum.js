"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigONotationEnum = void 0;
var bigONotationEnum;
(function (bigONotationEnum) {
    bigONotationEnum[bigONotationEnum["O(n)"] = 0] = "O(n)";
    bigONotationEnum[bigONotationEnum["O(n^2)"] = 1] = "O(n^2)";
    bigONotationEnum[bigONotationEnum["O(log n)"] = 2] = "O(log n)";
    bigONotationEnum[bigONotationEnum["O(n log n)"] = 3] = "O(n log n)";
    bigONotationEnum[bigONotationEnum["O(n!)"] = 4] = "O(n!)";
})(bigONotationEnum || (bigONotationEnum = {}));
exports.bigONotationEnum = bigONotationEnum;
//# sourceMappingURL=big-o-notation.enum.js.map