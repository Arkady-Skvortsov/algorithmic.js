class Stack {
  private readonly stack: any[];

  constructor() {
    this.stack = [];
  }

  public push(arg: any): void {
    this.stack.push(arg);
  }

  public pop(): void {
    this.stack.pop();
  }

  public first(): any {
    return this.stack[0];
  }

  public clear(): void {
    this.stack.length = 0;
  }

  public has(element: any): boolean {
    return this.stack.find((s: any) => s === element) ? true : false;
  }

  public peek(): any {
    return this.stack[this.stack.length - 1];
  }

  public getSize(): number {
    return this.stack.length;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public print(): any[] {
    return this.stack;
  }
}

export { Stack };
