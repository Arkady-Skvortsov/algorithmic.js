class Queue {
  private readonly queue: any[];

  constructor() {
    this.queue = [];
  }

  public enqueue(elem: any) {
    this.queue.push(elem);
  }

  public dequeue() {
    this.queue.shift();
  }

  public first() {
    return this.queue[0];
  }

  public has(elem: any) {
    return this.queue.find((q: any) => q === elem) ? true : false;
  }

  public peek() {
    return this.queue[this.queue.length - 1];
  }

  public getSize() {
    return this.queue.length;
  }

  public isEmpty() {
    return this.queue.length === 0;
  }

  public print() {
    return this.queue.join(' ');
  }
}

export { Queue };
