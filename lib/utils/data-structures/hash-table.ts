class HashTable {
  private hashTable: any;

  constructor() {
    this.hashTable = {};
  }

  private letsHash(key: string): number {
    let hash = 0;

    for (let i = 0; i < key.toString().length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 0.7;
  }

  public set(key: string, element: any): void {
    const idx = this.letsHash(key);

    if (!this.hashTable.hasOwnProperty(idx)) this.hashTable[idx] = {};

    this.hashTable[idx][key] = element;
  }

  public get(key: string): any {
    const idx = this.letsHash(key);

    if (
      this.hashTable.hasOwnProperty(idx) &&
      this.hashTable[idx].hasOwnProperty(key)
    )
      return this.hashTable[idx][key];
  }

  public checkUnique(key: string) {
    return this.get(key) ? "It's not unique key" : "It's unique key";
  }

  public remove(key: string): void {
    const idx = this.letsHash(key);

    this.get(key) ? delete this.hashTable[idx][key] : null;
  }

  public getSize(): number {
    return Object.keys(this.hashTable).length;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public keys(): string {
    return Object.keys(this.hashTable).join(' ');
  }

  public values(): any {
    for (const hash in this.hashTable) {
      for (const value in this.hashTable[hash])
        return this.hashTable[hash][value];
    }
  }

  public first() {
    return Object.values(this.hashTable)[0];
  }

  public clear() {
    let hash = Object.keys(this.hashTable);

    hash.splice(0, hash.length);
  }

  public peek() {
    return Object.values(this.hashTable)[
      Object.keys(this.hashTable).length - 1
    ];
  }

  public has(key: any): boolean {
    return this.get(key) ? true : false;
  }

  public print(): string | undefined {
    for (let hash in this.hashTable) {
      for (let key in this.hashTable[hash])
        return `{ ${key}: ${this.hashTable[hash][key]} }`;
    }
  }
}

export { HashTable };
