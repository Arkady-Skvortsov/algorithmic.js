"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
class HashTable {
    hashTable;
    constructor() {
        this.hashTable = {};
    }
    letsHash(key) {
        let hash = 0;
        for (let i = 0; i < key.toString().length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 0.7;
    }
    set(key, element) {
        const idx = this.letsHash(key);
        if (!this.hashTable.hasOwnProperty(idx))
            this.hashTable[idx] = {};
        this.hashTable[idx][key] = element;
    }
    get(key) {
        const idx = this.letsHash(key);
        if (this.hashTable.hasOwnProperty(idx) &&
            this.hashTable[idx].hasOwnProperty(key))
            return this.hashTable[idx][key];
    }
    checkUnique(key) {
        return this.get(key) ? "It's not unique key" : "It's unique key";
    }
    remove(key) {
        const idx = this.letsHash(key);
        this.get(key) ? delete this.hashTable[idx][key] : null;
    }
    getSize() {
        return Object.keys(this.hashTable).length;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    keys() {
        return Object.keys(this.hashTable).join(' ');
    }
    values() {
        for (const hash in this.hashTable) {
            for (const value in this.hashTable[hash])
                return this.hashTable[hash][value];
        }
    }
    first() {
        return Object.values(this.hashTable)[0];
    }
    clear() {
        let hash = Object.keys(this.hashTable);
        hash.splice(0, hash.length);
    }
    peek() {
        return Object.values(this.hashTable)[Object.keys(this.hashTable).length - 1];
    }
    has(key) {
        return this.get(key) ? true : false;
    }
    print() {
        for (let hash in this.hashTable) {
            for (let key in this.hashTable[hash])
                return `{ ${key}: ${this.hashTable[hash][key]} }`;
        }
    }
}
exports.HashTable = HashTable;
//# sourceMappingURL=hash-table.js.map