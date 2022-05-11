class HashTable {
  private hashTable: any[];
  private numItems: number;
  private loadFactor: number;

  constructor() {
    this.hashTable = [3];
    this.numItems = 0;
    this.loadFactor = this.numItems / this.hashTable.length;
  }

  private letsHash(key: string) {
    let hash = 17;

    for (let i = 0; i < key.length; i++) {
      hash = (13 * hash * key.charCodeAt(i)) % this.hashTable.length;
    }

    return hash;
  }

  public setUnique() {}

  public set(key: string, element: any) {
    this.numItems++;

    const idx = this.letsHash(key);

    this.hashTable[idx]
      ? this.hashTable[idx].push([key, element])
      : (this.hashTable[idx] = [[key, element]]);
  }

  public get(key: string) {
    let idx = this.letsHash(key);

    !this.hashTable[idx]
      ? "You don't have that element in table"
      : this.hashTable[idx].find((x: any) => x[0] === key)[1];
  }

  public getSize() {
    return this.hashTable.length;
  }

  public isEmpty() {
    return this.hashTable.length === 0;
  }

  public has(key: any) {
    const idx = this.letsHash(key);

    return this.hashTable[idx].find((x: any) => x[0] === key)[1] ? true : false;
  }

  public print() {
    return this.hashTable;
  }
}

const hashTable = new HashTable();

console.log(hashTable.has('Arkasha'));

export { HashTable };
