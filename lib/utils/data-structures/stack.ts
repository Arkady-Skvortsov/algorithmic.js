class Stack {
  private readonly stack: any[];

  constructor() {
    this.stack = [];
  }

  public push(arg: any) {
    this.stack.push(arg);
  }

  public pop() {
    this.stack.pop();
  }

  public first() {
    return this.stack[0];
  }

  public has(element: any) {
    return this.stack.find((s: any) => s === element) ? true : false;
  }

  public peek() {
    return this.stack[this.stack.length - 1];
  }

  public getSize() {
    return this.stack.length;
  }

  public isEmpty() {
    return this.stack.length === 0;
  }

  public print() {
    return this.stack;
  }
}

export { Stack };
