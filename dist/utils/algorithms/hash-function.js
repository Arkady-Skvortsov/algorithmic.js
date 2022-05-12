"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashFunction = void 0;
class HashFunction {
    constructor() { }
    run(key) {
        let hash = 0;
        if (key.length === 0)
            return hash;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 0.7;
    }
}
exports.HashFunction = HashFunction;
const hashFunction = new HashFunction();
console.log(hashFunction.run('ArkadiySkvortsov'));
//# sourceMappingURL=hash-function.js.map