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
    setUnique(key, element) {
        const idx = this.letsHash(key);
        this.hashTable.hasOwnProperty(idx)
            ? 'You already have that property in hash table'
            : (this.hashTable[idx][key] = element);
    }
    getCache(key) {
        const idx = this.letsHash(key);
        return idx;
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
const hashTable = new HashTable();
hashTable.set('Petr', 12);
hashTable.setUnique('Arkadiy', 'Middle developer enthusiast');
hashTable.set('Fruits', ['Apple', 'Watermelon']);
console.log(hashTable.get('Arkadiy'));
//# sourceMappingURL=hash-table.js.map