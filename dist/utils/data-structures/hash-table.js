"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
class HashTable {
    hashTable;
    numItems;
    loadFactor;
    constructor() {
        this.hashTable = [3];
        this.numItems = 0;
        this.loadFactor = this.numItems / this.hashTable.length;
    }
    letsHash(key) {
        let hash = 17;
        for (let i = 0; i < key.length; i++) {
            hash = (13 * hash * key.charCodeAt(i)) % this.hashTable.length;
        }
        return hash;
    }
    setUnique() { }
    set(key, element) {
        this.numItems++;
        const idx = this.letsHash(key);
        this.hashTable[idx]
            ? this.hashTable[idx].push([key, element])
            : (this.hashTable[idx] = [[key, element]]);
    }
    get(key) {
        let idx = this.letsHash(key);
        !this.hashTable[idx]
            ? "You don't have that element in table"
            : this.hashTable[idx].find((x) => x[0] === key)[1];
    }
    getSize() {
        return this.hashTable.length;
    }
    isEmpty() {
        return this.hashTable.length === 0;
    }
    has(key) {
        const idx = this.letsHash(key);
        return this.hashTable[idx].find((x) => x[0] === key)[1] ? true : false;
    }
    print() {
        return this.hashTable;
    }
}
exports.HashTable = HashTable;
const hashTable = new HashTable();
console.log(hashTable.has('Arkasha'));
//# sourceMappingURL=hash-table.js.map