class Stack {
  private readonly stack: any[];

  constructor() {
    this.stack = [];
  }

  public push(arg: any) {
    this.stack.push(arg);
  }

  public pop() {}

  public peek() {}

  public isEmpty() {}
}

const stack = new Stack();

export { Stack };
